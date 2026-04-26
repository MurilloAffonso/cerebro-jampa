interface IncluidoBlockProps {
  incluso?: string[];
  naoIncluso?: string[];
}

export function IncluidoBlock({ incluso, naoIncluso }: IncluidoBlockProps) {
  if (!incluso?.length && !naoIncluso?.length) return null;

  return (
    <section className="section-padding bg-light">
      <div className="container-safe max-w-3xl">
        <h2>O que está incluso (e o que não está)</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {incluso && incluso.length > 0 && (
            <div className="bg-white rounded-lg p-5 border border-green-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span aria-hidden="true">✅</span> Está incluso
              </h3>
              <ul className="space-y-2">
                {incluso.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed"
                  >
                    <span className="text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true">
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {naoIncluso && naoIncluso.length > 0 && (
            <div className="bg-white rounded-lg p-5 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span aria-hidden="true">❌</span> Não está incluso
              </h3>
              <ul className="space-y-2">
                {naoIncluso.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-gray-500 leading-relaxed"
                  >
                    <span className="mt-0.5 flex-shrink-0" aria-hidden="true">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
