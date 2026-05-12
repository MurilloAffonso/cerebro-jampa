/**
 * Reviews reais do Google Maps — VempassearJampa
 *
 * FONTE: Google Maps oficial (extraído em 2026-05-11 via scraping autorizado).
 * Total na plataforma: 63 avaliações (60 com 5★, 2 com 4★, 1 com 1★).
 * Aqui ficam os 8 reviews vitrine com texto + fotos reais.
 *
 * Regra: NUNCA editar texto, nome ou imagens. Para atualizar a lista,
 * rodar nova extração via Playwright e substituir esta constante.
 */

export interface GoogleReview {
  name: string;
  stars: number;
  tempo: string;
  text: string;
  photoUrls: string[];
  avatarUrl: string;
}

export const googleReviews: GoogleReview[] = [
  {
    name: "Bila construtora",
    stars: 5,
    tempo: "2 semanas atrás",
    text: "Experiência incrível!\n\nFechamos todos os passeios com a Vem Passear Jampa e foi a melhor escolha que poderíamos ter feito. Montamos um combo completo com eles e tudo foi muito bem organizado do início ao fim.\n\nO Murilo foi sempre muito atencioso, montou todo o roteiro pra gente e ainda indicou os melhores dias de passeio de acordo com a tábua de maré, o que fez toda a diferença na experiência.\n\nTodos os parceiros indicados também foram excelentes, mostrando o cuidado da empresa em trabalhar com qualidade.",
    photoUrls: [
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn0jgPozNegTjPEyiwZyx04c7v9zABduZtzzPYGL_wsA52bGBrNS6hWZmq3xWVca5kuQjmgGY28gcN7FoSVhzTVowS8FeE7Nza7y7fBSvLDI6BAIXotz_Ge0GV-nf6ofKEuGGm1TelyZLr42=w375-h563-p-k-no",
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn2OLsb4FJSJQfPcynrpGwowKBc6539IFWI3aMT8nZ55EHbvkbvvk6PRnJSm-1Mt0XP92IoSkgHjRCDXHsYEv8_wkMZyw9vsadmhhR2H4WQB24qw-YWwEYtb5OVx9f-CaBfNBlKtSD63sgVR=w375-h563-p-k-no",
    ],
    avatarUrl: "https://lh3.googleusercontent.com/a-/ALV-UjXN8aLwvCG1IUj_PCQ38ZOQIvV7ElWF64KdNk9wRfydy-thsMak=w45-h45-p-rp-mo-br100",
  },
  {
    name: "Verônica Ferreira",
    stars: 5,
    tempo: "3 semanas atrás",
    text: "Fizemos dois passeios incríveis com a empresa e tivemos uma experiência maravilhosa!\n\nO primeiro foi o catamarã para o pôr do sol no Jacaré, simplesmente inesquecível. Durante o passeio, tivemos apresentações de Lampião e Maria Bonita, além do Juandy do sax. No final, ele sobe para um show exclusivo que é algo único. É aquele tipo de momento que dá vontade de congelar no tempo.\n\nFomos atendidos pelo Murillo, que fez toda a diferença: nos explicou tudo com calma, sem pressão para fechar os passeios, e foi super atencioso do início ao fim.",
    photoUrls: [
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn2s3hgFEtBqWQz-BjcZoFZ7_q_AfVkwrIrQAY6kyS7Z483pcEVDa91pRe_6e3D-qODvHETYtyZIncUGg4utiEP8BArjeDwm5zvf8Pib4cDcY9bFUzrbJ0FIIzIhGTFiq0v7VoAhbDIEO54N=w375-h281-p-k-no",
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn3drQ2JIuCfVcSpKBMNsAPEnXhHk8YeTHI57m_-p9hs_aHnbp32_ORQHpAZmITL1RWWYb2ZDoTY0o_2Bb11ne_6Vd4lL3vX6GZ4aWhFi7DJ9csouapuE3N3vodt4HIjvM5oCuwV6cs8Il-t=w375-h281-p-k-no",
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn2ufracLZyIPemn1bS7qdVOqGzHK1GLY6eKrWMoUUhrg76K7WxaWt7cxzpYOIt_aBkvPZRl2Og3KhBHTBKnXsKAB1O1Zwp5poSO5-OuzxgkS3f7coacwzwBoZJVVq1la7eYqSHhlw8FJbA=w375-h281-p-k-no",
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn3u96lDR99Dqv-j6FWA6EwnLmb0uyuav98kFpgS8zIuuQcp2J5RJR5E0i1RN4WFyE4daki8GdLKYVgYfmvM9ZLE_LJ-rHolRSUF-o5QJy1mru5vs7ZicSf9gqnXVuHNK9GZ_5dydehPrKs=w375-h281-p-k-no",
    ],
    avatarUrl: "https://lh3.googleusercontent.com/a-/ALV-UjWNf2TI01cprhXM4WfQDo7aGH-uZnVJ0ywNrFV8HM7lqFTodzlMXw=w45-h45-p-rp-mo-br100",
  },
  {
    name: "Laís Moura",
    stars: 5,
    tempo: "2 meses atrás",
    text: "É a segunda vez que venho em João Pessoa, mas essa sem dúvida acertamos em cheio na escolha da agência para os nossos passeios. Atendimento de excelência em todas as etapas, desde o primeiro atendimento para compra com o Murilo, quanto nos demais momentos. Fechamos três passeios com eles e todos nos surpreenderam positivamente.\nCom certeza voltaremos e fecharemos com eles novamente ☺️",
    photoUrls: [
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn311sS1bqJ1DMFMSdUosvRZfKjoLRq9vsxrNrdqCR6S7RDpspoClbRaDBaFYJG8HS4ose7dp-8-aC2vivCHgkoyh8PbS1PZVlnlqtqUBMksDLk9GCaMg8AhuqqVlppavvJllwrW0o6zbiQs=w375-h563-p-k-no",
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn27Jh8a6tqOAHDBXA3HsidBqPt7cNeThycIhXX0qnSrTe2rA8N6_ZvuJuxlvIKh7_xWbWN0GV21vf5VUR-DSOKrutLdTjh0gohySlDOawIP1iZPTwM4V0tF-5C6Ezn-FWzi3LnnqbtsD_SM=w375-h281-p-k-no",
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn2ysHqo1ao80IS4XtU7Bg04XQq0z-hSFOSdNEkioljcjsiKMGEqsFkdf6V1r5E_FqyP4t0ftC8lb3N3tme7EcUqNYx1OgBKkHvZp-xppuHz5-l_fXGk9ViL1_yC5MM-KMQKU8xECot9j4iL=w375-h281-p-k-no",
    ],
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocKnGpf9Rbck3CeL1KX4G7P7P2uSZTPpQlOMCxaXISADMafaaQ=w45-h45-p-rp-mo-br100",
  },
  {
    name: "Eva Silva",
    stars: 5,
    tempo: "2 meses atrás",
    text: "O passeio até as piscinas Naturais do Seixas foi um espetáculo, super recomendo!! O Murillo, que nos vendeu o passeio, foi super simpático, optamos pelo barco 100% Lazer e tanto a equipe quanto a estrutura são maravilhosos. Me surpreendeu positivamente!",
    photoUrls: [
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn1ft6_NScEDClZWi6vLb7JQHYEE_h5FGYIpr8gOUb6wullR8aQXOGWPGnxOPqf08aQoCpILd4nIC6p7gwaWZqVBtVtvFBW6h8n3Ar8V_vvOLKVag3CwOTMrK0M1drWqRzctZLu3FtKUmJk=w375-h563-p-k-no",
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn2FAYN2KmTxFcEsiKRbfrS5RWe8imNlRqHTb4ScWvIG-Q2Y4fXwX7DMHmu5aXKFiKDNun-gwrLMrvKphp5AuEPMYD2TgFYwOOZtwSfBn4To2bmhKDw-4gpspkUIhXf11bnkQqaB9Wyhbk9W=w375-h563-p-k-no",
    ],
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocJt9s8maOPuhGF3i6kWgPL6vQI_5oO-NRrGrfRZFv3A3JD2KQ=w45-h45-p-rp-mo-br100",
  },
  {
    name: "Susana Brandão",
    stars: 5,
    tempo: "2 meses atrás",
    text: "Estive pela primeira vez na Paraíba com meus filhos e busquei qualidade, segurança e conforto para proporcionar passeios incríveis e encontrei tudo isso com o Murilo da Vem passear Jampa, só agradecer, por planejar a melhor logística e entregar o melhor serviço.",
    photoUrls: [
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn1OlFrr5Sjn39UeEUmREIOfdaCtU56v8JfR_pnaV0lzCh4ZrGCd_1oprYC2fgRcKqSxfK0OHc4r7Ch0PIAzWFB6uUV4YUwq-CDFICgPSkY3sIXJ78MkZRiOuffLlynnWmbe50nSp9MWmwD-=w375-h563-p-k-no",
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn3BSDyp0lL0hzi72BnZbbBRLkWS-pZJ4n53UIKfszhubi57w9AWRsE4_yoFwWo6GrmijkRpkFTrCxwbQueEacekcWXB05DEGsB9ZlEaS1h9iq-9HFVtaxBUsBxCum239CVjdqBItyV5kuO-=w375-h563-p-k-no",
    ],
    avatarUrl: "https://lh3.googleusercontent.com/a-/ALV-UjVluAUkSTQ1H2ANhW2hLUSBt_PYqTrqG9qcDz3fGbmexjDOIjKs=w45-h45-p-rp-mo-br100",
  },
  {
    name: "Monica Tosto",
    stars: 5,
    tempo: "2 meses atrás",
    text: "Tive uma ótima experiência em João Pessoa, conheci o Guia Murilo que faz parte do turismo Jampa que foi muito atencioso, passeios foram maravilhosos e fora o valor que atendeu minha realidade!!! Todos do Turismo Jampa estão de parabéns.",
    photoUrls: [
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn3spRHO7w2WdOw7Ph0EMU_1WI5dAOJ1lRxXg1jPiJDKBel9WFX_Bu4Amkw5_tSDewl3QTDlfFNpikWX17q19z0_bXmeMuk08bQC-HxCWBzb5IvgQCg-h2WDuXsffk08rsWI84Of1Eb2wVw_=w375-h563-p-k-no",
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn3mzjnEJY7IZRcIi297BGnDIkQmBGnzNrkE5wjv1vr1Ta7tji8-a_9LuGrYrbD6QPHksy6rG0WbB6oXfAAXFWEW9pXuPGbG8dEdtaTLA2noZQAG1Q-LkD4PnKaGlUxhe7vOSVpgC9qPJzQd=w375-h281-p-k-no",
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn3K_utDWzM7XpEp0riOJeUH0uL8AeNwnyUmcx-ISohPrrU7fwau_EyX7SUQgJmp1RHg5M3ftT8UlqZ0b4XeOr5ConD5lBlGN-c5oMmim1p4YIwzgnzz48Ufo4lxy7H6YA1OJmWRL4DtxzY=w375-h281-p-k-no",
    ],
    avatarUrl: "https://lh3.googleusercontent.com/a-/ALV-UjXbrigwociCISZk_rQi5WdSwu6ig2C09JHp4j4Z8vdNZACmzJFK=w45-h45-p-rp-mo-br100",
  },
  {
    name: "Julia Fernanda Lima Mattje",
    stars: 5,
    tempo: "3 meses atrás",
    text: "Tive em João Pessoa agora em janeiro e fiz todos meus passeios com a empresa, ao chegar na cidade fiz uma busca de preço e o deles eu achei o melhor valor, e além do valor ótimo também o atendimento é fora do comum, muito muito bom, não tive nenhum problema ao contrário só tive experiências ótimas, sempre disponíveis e sempre compreensíveis em relação a dias q precisei mudar algum passeio, alguma rota ou algo. Recomendo muito!!!",
    photoUrls: [
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn2RE5_fOigFqJv_fNF6AqgaBokxyXiQKtXEV1MN8pQgxErojzNp8i1CcR7oITc7pX-eOXk8Qrn1emeuq99OITCxtwZlHulfrXziQgKx6snOdkFDqf-UFEFZUiRy06q9vhbClEmpe_-CoZs=w375-h281-p-k-no",
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn0qEmoAAfklDVxRvAWRtmLdbMsT_SQLuQEZqN753h0ZoouNVKgC4U00xA2NhNC17ObuKcmDAlBZieS-lRIRkGdC8HgCX-4gxpQJaRN9hm7CuJGtXJxZ0Dwfv7tkICFuLI6sk1Z_G5uyYxNs=w375-h281-p-k-no",
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn04_8QF18VvUUpE1JvK7BTmScMtu1OB_bI1L-dCMaMerO4vhHfUiz7ZHx4-xGsdqdojI6vaVtp_zJfiZz0N6RA4bahNF9Eybjyjh9yQJymixET3EF12pNbLpESmYjRiEdPxe2cVGTsNYj_o=w375-h281-p-k-no",
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn1bdeTnnLxa1j1ElSXCw3yxvruCef1XRkZfA_PAeJ1G0ZyCrAB1xWojJ7ripR6Duqf3OQcD511-grWgL8EE5RiUzss6_S__8bTY8UGBm-6DrcMC5FV2-7mRu4O6vY5eH_cFZ8wodjEZxXxI=w375-h281-p-k-no",
    ],
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocLg1kaMlza941rqlwFPc-37TH6n7SPWmR36C7g8HGZiitpPRQ=w45-h45-p-rp-mo-br100",
  },
  {
    name: "ana caroline",
    stars: 5,
    tempo: "3 meses atrás",
    text: "Super recomendo. Equipe muito atenciosa, pontual com horário de início de passeio. Buggeiro muito atencioso e simpático o que faz o passeio mais especial, fora as fotos que ele tira muito bacana para recordações. Atendeu minhas expectativas. Visitamos pontos lindíssimos. Até a próxima. 🙏🏼",
    photoUrls: [
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn1ayAB76yU_Kvb-aCjt82b06MzX3UFMsbjYjkWBT-oIy9VKZ50hte0UIxKPIQECxHjUueLrGTJ9B7kztZnnVf-ErkB0L98C894DXb-B7hJx7lf7UUe9kC-2n5lthVV7yAAuD_RHH-2V7Moz=w375-h563-p-k-no",
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn2d2S6vVyG1GZe5ZxjHbI03m1GNmGaJO3G1BtuHrMgV5XATyBOejb2oJ1QFfbsRcqUrT-dy2kIgsa5RaLdZHRcOXZCigXiPmAem4X86f14V0iZydBYEXJiyxbpojeF5gJYBCH2IshueFYQ=w375-h281-p-k-no",
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn2zMMAlzpKPJVF8KCo7zW8DQ_dLLy26AGTl10rm6GNH8XKBfT7NCRJRvoxI96vnCJpuGt9W0NUhpztvDEedUuI1g2fokBhk5FfIRwMVXuI2MnrbB5tiMA7oQD-ZXrONKcs5aS6ZQaPFEEeH=w375-h281-p-k-no",
    ],
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocL5YcB6M5LRBnX1Y8kkWn34TtKH-0zmy_ZyA6r-YuGfyhS_6g=w45-h45-p-rp-mo-br100",
  },
  {
    name: "Rafaela Galdino",
    stars: 5,
    tempo: "2 meses atrás",
    text: "Um passeio maravilhoso. Atendimento excelente.",
    photoUrls: [
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn0pUVLq67-o2eUksa2HRERNv_SOQTaKBvmSrAHgQIk8JzIwGLp9DeTxCGq34QmSZQHN9aryQq9TzTlPQJ1gjOFkqqK2Jzcwvd20rKumUQb1ZDS7xbj_Gvz3ACjqQVAfey4Ru8Nj8ptx51V3=w375-h281-p-k-no",
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn0CFknehIhpopDt6Ljj01u2f7Cr77-_CrwqnQO6H-TM2tSmGx2mEUoHzpB6QfbwQJCOFyvKX-MJ0Rvb8OePWe4IQfgK_UGdYZbF7gVjkEHIDJP3-vH2T3yGuJydfyUc001JvCHJ92bZRyhs=w375-h281-p-k-no",
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn33OmZPBOE-654H-hnSm0x7DenQ92OG_6DmDwRZVaIHSom1FA5LIf_ASodE7qyxWyJrcihRdL9BMPUs3TVZDG1jN2lCkGhkDcHyJ7i7Dnpf_6_Sy7Y7AmZpEJPHMTOVI6CjqY_z4ZuHXiQY=w375-h281-p-k-no",
    ],
    avatarUrl: "https://lh3.googleusercontent.com/a-/ALV-UjXEAj9682klbdrhdugf5C2gQfvdSsZToAyB0j0P4lR4SZIu9dI=w45-h45-p-rp-mo-br100",
  },
  {
    name: "Camila Santos De Sousa",
    stars: 5,
    tempo: "3 meses atrás",
    text: "Equipe maravilhosa, todos muito atenciosos. Amamos e recomendamos fortemente.",
    photoUrls: [
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn1wEkZb0H0l3K-dej5EaJt6CJDIpAcuyCb7DZ7G-aKsqSRqhimBms1qfSvmlUeqWDOtperlwlBSZmrxVtO9YttpFtk7G-Ve8BAohs9RXoDEN6WhwmYyq8wlu9cS62eXJeyjWGsScxOGpug=w375-h281-p-k-no",
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn1btZYQZcw0OtCik_pCnu7YI46lG-bF-P-TJTCfG72T2fEM-_zkKilKuDrVHDOFebIYYgbd_smFZA03r8M9sfIlvf7JT_E81njWU-X_LPPKxsu-E82bFzrCr0jxa42EoWLgdKFiCRDPYb0=w375-h281-p-k-no",
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn0RiM9cgFOb0pWtYH2HR9winrj-bntDPzdL6H1nr41sv0v5ddTefD84_VQ7prwVkNhmuLb2gTzkReWbJpqYupHk804JfPEqV56jOqQbf18h_obstafGPNU3yyQIBeX5zIJUc0H80VqQXEB_=w375-h281-p-k-no",
    ],
    avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocJvKOKeYqdv_gQA9pSITuBw7fdenBBpcSiqvrm_NHfZ4nk54Z9H=w45-h45-p-rp-mo-br100",
  },
  {
    name: "Eliane Campos",
    stars: 5,
    tempo: "3 meses atrás",
    text: "Foi a nossa melhor escolha essa agência! Vivenciamos um dia incrível! Pontuais, preço justo e guia maravilhoso! Recomendo!",
    photoUrls: [
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn1NAtoQSR1_1J__qfjWR8rtQ2k-aE7CoQ0aOqoGSS5sdSmQESLIzo4Cp-Z07eZK8z0rnUGyrAIAkh-lCSEk41oU6S4IbfFrFX5ktCGmdnOD9f39fLOub3D0Xpzr6iEAgi6vFj8Qy-ZQAEAs=w750-h563-p-k-no",
    ],
    avatarUrl: "https://lh3.googleusercontent.com/a-/ALV-UjWTJQVx5zweLhxEjEuJWOax19yc95HYmQIO6sXeiJb7UgVXdzFWFw=w45-h45-p-rp-mo-br100",
  },
];
