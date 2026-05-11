"use client";

export default function VideoLogo() {
  return (
    <div className="relative w-full h-auto aspect-[538.582/760.83]">
      <div
        className="
          w-full h-full bg-primary overflow-hidden
          [mask-image:url('/assets/logoMark.svg')]
          [mask-size:contain]
          [mask-repeat:no-repeat]
          [mask-position:center]
          [-webkit-mask-image:url('/assets/logoMark.svg')]
          [-webkit-mask-size:contain]
          [-webkit-mask-repeat:no-repeat]
          [-webkit-mask-position:center]
        "
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/assets/about/gap-bg.avif"
          className="w-full h-full object-cover"
        >
          <source src="/assets/bg/logomark-bg.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}