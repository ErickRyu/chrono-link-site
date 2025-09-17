export default function BalmudaPhilosophy() {
  return (
    <section className="py-40 bg-white">
      <div className="max-w-5xl mx-auto px-8">
        {/* Philosophy title */}
        <div className="mb-24 text-center">
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 tracking-wide">
            Philosophy
          </h2>
        </div>

        {/* Main philosophy text */}
        <div className="space-y-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-extralight leading-relaxed text-gray-800 text-center">
              디지털 시대,
              <br />
              우리는 시간을 잃었습니다.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg font-light leading-loose text-gray-700 text-center">
              알림에 쫓기고, 화면에 갇혔습니다.
              <br />
              생산성을 추구하며 오히려 산만해졌고,
              <br />
              연결되어 있으면서도 고립되었습니다.
            </p>
          </div>

          <div className="w-16 h-[1px] bg-gray-300 mx-auto" />

          <div className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-extralight leading-relaxed text-gray-800 text-center">
              ChronoLink는
              <br />
              물리적 다이얼로
              <br />
              시간의 주도권을 되돌려줍니다.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg font-light leading-loose text-gray-700 text-center">
              손끝에서 시작되는 집중.
              <br />
              다이얼을 돌리는 순간,
              <br />
              시간은 당신의 의지가 됩니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}