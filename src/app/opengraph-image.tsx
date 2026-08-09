import { ImageResponse } from "next/og";
import { SONA_PATH } from "@/shared/ui/sona-path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Open Graph image — logomark sona + wordmark, fundo obsidiana. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
          background: "#14110D",
        }}
      >
        <svg width="140" height="140" viewBox="0 0 200 200" fill="none">
          <path
            d={SONA_PATH}
            stroke="#B8935A"
            strokeWidth={7}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 900, color: "#EDE6D9" }}>
          WA<span style={{ color: "#B8935A" }}>.</span>S
        </div>
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 2, color: "#8C8477" }}>
          WAFUNGA SOFTWARE · BENGUELA, ANGOLA
        </div>
      </div>
    ),
    { ...size },
  );
}
