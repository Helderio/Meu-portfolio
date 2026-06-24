
-- Roles
CREATE TYPE public.app_role AS ENUM ('admin');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own roles" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

-- Projects
CREATE TABLE public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  tag TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  stack TEXT[] NOT NULL DEFAULT '{}',
  url TEXT,
  featured BOOLEAN NOT NULL DEFAULT false,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.projects TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.projects TO authenticated;
GRANT ALL ON public.projects TO service_role;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Admins insert projects" ON public.projects FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins update projects" ON public.projects FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete projects" ON public.projects FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE OR REPLACE FUNCTION public.update_updated_at_column() RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;
CREATE TRIGGER projects_updated_at BEFORE UPDATE ON public.projects FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Seed existing portfolio projects
INSERT INTO public.projects (name, tag, description, stack, featured, display_order) VALUES
('Vaquinha', 'Fintech · Mobile · Angola', 'App móvel de divisão de despesas integrada com Multicaixa Express (MCX). Arquitectura de colector — a app nunca detém fundos. Desenhada para a economia informal angolana com UX calorosa em "warm obsidian".', ARRAY['React Native','Expo','TypeScript','NativeWind','Spring Boot 3','PostgreSQL','Hexagonal Arch'], true, 1),
('Liga AO', 'Plataforma · Angola', 'Disponibilidade de postos de combustível em tempo real. 340 estações reais via OpenStreetMap. Backend Spring Boot + frontend React/TanStack.', ARRAY['Spring Boot','PostgreSQL','React','JWT/RBAC'], false, 2),
('Estudar Hub', 'Academic · ISPB', 'Plataforma académica com 6 módulos: perfis, portfólio, equipas, eventos, chat e ranking. Apresentado nas Jornadas do ISPB.', ARRAY['React','Spring Boot','OAuth2','PostgreSQL'], false, 3),
('Zela', 'SaaS · PME Angola', 'SaaS de gestão para PMEs angolanas: facturação, stock, CRM e dashboards. Multi-tenant com discriminador empresa_id.', ARRAY['Spring Boot','Multi-tenancy','PostgreSQL','DM Sans'], false, 4),
('LACUNA', 'Infra · Documentos', 'Carteira digital de documentos autenticados para Angola. AES-256, rotação QR, webhooks HMAC-SHA256, multi-tenancy com RLS.', ARRAY['Java 21','Docker','RLS','AES-256'], false, 5);
