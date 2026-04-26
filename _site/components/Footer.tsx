/**
 * Footer
 *
 * Inclui:
 * - NAP: Nome, Endereço, Telefone (consistente em todos os places)
 * - Links rápidos
 * - Redes sociais
 * - Copyright
 *
 * Fonte: _memoria/decisoes-estrategicas.md (Regra 6: NAP Consistente)
 */

import Link from "next/link";
import { empresa, paginasInfo } from "@/data/empresa";

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="container-safe py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4">{empresa.nome}</h3>
            <p className="text-gray-300 text-sm">
              Agência de turismo receptivo em João Pessoa. Confiança, atendimento rápido e
              orientação local.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/passeios" className="hover:text-primary transition">
                  Passeios
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-primary transition">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <p className="text-sm text-gray-300 mb-4">
              <strong>Murillo</strong>
              <br />
              João Pessoa, Paraíba
              <br />
              <a
                href={paginasInfo.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                {paginasInfo.whatsappDisplay}
              </a>
            </p>
            <div className="flex gap-4">
              <a
                href={paginasInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-primary transition"
              >
                Instagram
              </a>
              <a
                href={paginasInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
                className="hover:text-primary transition"
              >
                Localização
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            © 2026 {empresa.nome}. CNPJ {empresa.cnpj}. Todos os direitos reservados.
          </p>
          <p>Cadastur {empresa.cadastur} — Válido até {empresa.cadasturValido}</p>
        </div>
      </div>
    </footer>
  );
}
