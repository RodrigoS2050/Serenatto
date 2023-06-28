import { Component } from '@angular/core';
import { Accordion } from 'src/models/accordion';
import { Card } from 'src/models/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  cards: Card[] = [
    {
      id: 'canvas-1',
      src: 'assets/cafe-card.jpg',
      alt: 'Balcão de padaria tradicional com alimentos diversos',
      title: 'Café & Bistrô',
      description:
        'Nosso bistrô oferece uma ampla variedade de cafés, smoothies, deliciosos salgados e sobremesas. Uma excelente opção para quem busca um lugar tranquilo e aconchegante.',
    },
    {
      id: 'canvas-2',
      src: 'assets/buffet-card.jpg',
      alt: 'Mesa de buffet com alimentos diversos',
      title: 'Buffet',
      description:
        'Buffet e catering personalizado para eventos, produções e celebrações. Com um menu variado e adaptável às preferências do cliente, atendimento atencioso e profissional.',
    },
    {
      id: 'canvas-3',
      src: 'assets/delivery-card.jpg',
      alt: 'Caixa aberta armazenando comidas diversas',
      title: 'Delivery',
      description:
        'Para quem deseja desfrutar no conforto de casa, oferecemos delivery dos produtos. Com o mesmo cardápio variado de sempre, sem perder nosso sabor e padrão de qualidade.',
    },
  ];

  accordions: Accordion[] = [
    {
      id: 'canvas-1',
      title: 'Café & Bistrô',
      firstBtn: 'Café',
      firstDesc:
        'Temos um excelente espaço para alimentação e descanso, com a vitrine recheada de doces, salgados, cafés tradicionais e especiais para desfrutar seus melhores momentos.',
      secondBtn: 'Bistrô',
      secondDesc:
        'Além de cafés o dia todo, oferecemos refeições em horário de almoço (11 às 15h) com pratos deliciosos de bistrô!',
      thirdBtn: 'Coworking',
      thirdDesc:
        'Temos espaço adequado para trabalho, com conexão de internet de alta velocidade e instalações confortáveis para reuniões.',
    },
    {
      id: 'canvas-2',
      title: 'Buffet',
      firstBtn: 'Eventos',
      firstDesc:
        'Organizamos buffet com cardápios variados e personalizados para casamentos, festas de aniversário e outros eventos!',
      secondBtn: 'Catering',
      secondDesc:
        'Oferecemos serviço de alimentação variada para coffee breaks, produções e bastidores.',
    },
    {
      id: 'canvas-3',
      title: 'Delivery',
      firstBtn: 'Encomendas para eventos',
      firstDesc:
        'Produzimos e entregamos os itens de café de nosso cardápio em grandes quantidades para seus eventos! Basta entrar em contato e fazer a reserva com 72h de antecedência.',
      secondBtn: 'Entrega por aplicativo',
      secondDesc:
        'Entregamos pelos aplicativos Ifood e Rappi. Consulte nosso cardápio por lá e faça seu pedido!',
    },
  ];
}
