import { useState } from "react";

/* ── a song, shown as its thumbnail until it's asked for ───
   The iframe is only mounted after a tap — a card that embeds
   every video up front loads N players nobody has pressed
   play on yet, which is the opposite of "ringan". */
export default function SongCard({ title, artist, youtubeId }) {
  const [playing, setPlaying] = useState(false);
  const hasVideo = Boolean(youtubeId);

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-blue-900/10 bg-white shadow-sm shadow-blue-950/5">
      <div className="relative aspect-video w-full bg-blue-900/5">
        {playing && hasVideo ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => hasVideo && setPlaying(true)}
            className="group absolute inset-0 flex items-center justify-center disabled:cursor-not-allowed"
            disabled={!hasVideo}
            aria-label={hasVideo ? `Putar ${title}` : `${title} (belum diisi)`}
          >
            {hasVideo ? (
              <img
                src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
                alt={title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            ) : (
              <span className="oooh-baby text-lg text-blue-900/30">
                tempel link YouTube di sini
              </span>
            )}
            {hasVideo && (
              <>
                <span className="absolute inset-0 bg-blue-950/10 transition-colors duration-300 group-hover:bg-blue-950/20" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-md transition-transform duration-200 group-active:scale-90">
                  <svg
                    viewBox="0 0 24 24"
                    className="ml-0.5 h-5 w-5 fill-blue-900"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </>
            )}
          </button>
        )}
      </div>
      <div className="px-4 py-3 text-left">
        <p className="text-sm font-semibold text-blue-950/80">{title}</p>
        <p className="text-xs text-blue-950/50">{artist}</p>
      </div>
    </div>
  );
}
