export default function VideoLogo() {
  return (
    <div className="relative w-full h-auto aspect-[538.582/760.83]">
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/assets/bg/logomark-bg.mp4"
        className="
          w-full h-full object-cover
          [mask-image:url('/assets/logoMark.svg')]
          [mask-size:contain]
          [mask-repeat:no-repeat]
          [mask-position:center]
          [-webkit-mask-image:url('/assets/logoMark.svg')]
          [-webkit-mask-size:contain]
          [-webkit-mask-repeat:no-repeat]
          [-webkit-mask-position:center]
        "
      />
    </div>
  );
}