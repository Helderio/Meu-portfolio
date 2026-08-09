import { ImageResponse } from "next/og";
import { SONA_PATH } from "@/shared/ui/sona-path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Favicon — o motivo sona, mesma fonte de path que o SonaMark. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#14110D",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 200 200" fill="none">
          <path
            d={SONA_PATH}
            stroke="#B8935A"
            strokeWidth={14}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
