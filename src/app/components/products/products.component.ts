import { Component } from '@angular/core';
import { Modal } from 'src/models/modal';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 'modal-1',
      src: 'assets/cafe-tradicional.png',
      alt: 'Café Preto',
      title: 'Cafés Tradicionais',
    },
    {
      id: 'modal-2',
      src: 'assets/cafe-especial.png',
      alt: 'Café Expresso',
      title: 'Cafés Especiais',
    },
    {
      id: 'modal-3',
      src: 'assets/vitaminas.png',
      alt: 'Vitaminas Variadas',
      title: 'Smoothies e Vitaminas',
    },
    {
      id: 'modal-4',
      src: 'assets/paes.png',
      alt: 'Pães Variados',
      title: 'Pães e Focaccias',
    },
    {
      id: 'modal-5',
      src: 'assets/doces.png',
      alt: 'Bolo de morango',
      title: 'Doces',
    },
    {
      id: 'modal-6',
      src: 'assets/salgados.png',
      alt: 'Torta salgada',
      title: 'Salgados',
    },
  ];

  modals: Modal[] = [
    {
      id: 'modal-1',
      src: 'assets/cafe-tradicional.png',
      alt: 'Xícara de café expresso',
      title: 'Cafés Tradicionais',
      description: [
        'O café Serenatto é conhecido por seus blends tradicionais e saborosos, que agradam aos amantes da bebida. Nossos grãos são cuidadosamente selecionados e torrados para produzir um aroma rico e sabor equilibrado.',
        'Entre os cafés mais tradicionais da casa, destaca-se o "Café Serenatto", um blend exclusivo de grãos com notas de chocolate e caramelo. Outra opção popular é o "Café Italiano", um café expresso encorpado e intenso. Já o "Café Cappuccino" é uma escolha clássica para quem prefere uma bebida cremosa e suave.',
      ],
    },
    {
      id: 'modal-2',
      src: 'assets/cafe-especial.png',
      alt: 'Xícara de café expresso',
      title: 'Cafés Especiais',
      description: [
        'Somos conhecidos também por nossos cafés especiais, que são cuidadosamente preparados com grãos selecionados de alta qualidade e técnicas de preparo precisas.',
        'Entre as opções de cafés especiais do Café & Bistrô Serenatto, destacamos o café aeropress, que é preparado com uma técnica de imersão e pressão, resultando em uma bebida de sabor intenso e aroma acentuado. Outra opção popular é o café Hario V60, que é preparado com um filtro de papel em formato de cone e resulta em uma bebida limpa e suave, ressaltando as notas sensoriais dos grãos. Além disso, oferecemos uma variedade de bebidas geladas, como o café gelado, que é preparado com grãos torrados escuros e servido com gelo e leite, resultando em uma bebida refrescante e saborosa.',
      ],
    },
    {
      id: 'modal-3',
      src: 'assets/vitaminas.png',
      alt: 'Jarras de vitaminas variadas',
      title: 'Smoothies e Vitaminas',
      description: [
        'Nossos smoothies e vitaminas são uma explosão de sabores e nutrientes para energizar o seu dia. Cada opção é cuidadosamente preparada com ingredientes frescos e saudáveis, garantindo uma experiência única.',
        'Experimente o Smoothie Energia Tropical, uma mistura revigorante de manga, abacaxi e banana, perfeito para começar o dia com toda a vitalidade. Ou talvez o Vitamina Verão Refrescante, feito com morango, melancia e laranja, uma combinação refrescante que traz o melhor da estação em um copo. Nossos smoothies e vitaminas são a escolha perfeita para quem busca sabor e saúde em uma só dose.',
      ],
    },
    {
      id: 'modal-4',
      src: 'assets/paes.png',
      alt: 'Cesta de pães e focaccias',
      title: 'Pães e Focaccias',
      description: [
        'Nossos pães e focaccias são assados artesanalmente, com ingredientes selecionados e paixão pela panificação. Cada mordida é uma experiência deliciosa e reconfortante. Experimente o Pão Multigrãos, uma combinação de sementes e grãos que resulta em uma textura crocante e um sabor único.',
        'Para os amantes de focaccia, temos a Focaccia Mediterrânea, com azeite de oliva, tomate seco e alecrim, proporcionando um sabor mediterrâneo irresistível. Nossos pães e focaccias são perfeitos para acompanhar um café especial ou simplesmente saborear como um lanche satisfatório a qualquer hora do dia.',
      ],
    },
    {
      id: 'modal-5',
      src: 'assets/doces.png',
      alt: 'Um bolo de morango',
      title: 'Doces',
      description: [
        'Nossas sobremesas são verdadeiras obras de arte açucaradas, criadas com maestria para agradar os paladares mais exigentes. Cada doce é cuidadosamente elaborado com ingredientes de alta qualidade e uma pitada de criatividade.',
        'Experimente o Bolo de Chocolate Supremo, uma tentação para os amantes de chocolate, com camadas de bolo fofinho, recheio cremoso e cobertura indulgente. Ou talvez o Cheesecake de Frutas Vermelhas, uma combinação perfeita de suavidade e acidez, com uma base crocante de biscoito. Nossos doces são o ponto alto de qualquer refeição e vão satisfazer os desejos mais doces.',
      ],
    },
    {
      id: 'modal-6',
      src: 'assets/salgados.png',
      alt: 'Uma torta salgada',
      title: 'Salgados',
      description: [
        'Nossos salgados são uma explosão de sabores e texturas, ideais para satisfazer aquele desejo por algo salgado e delicioso. Cada opção é preparada com cuidado e ingredientes frescos, garantindo uma experiência gastronômica excepcional.',
        'Experimente o Croissant Recheado, uma massa folhada crocante e dourada, recheada com queijo derretido e presunto defumado. Ou talvez o Empadão de Frango, com uma massa macia e desmanchando, recheada com frango suculento e temperos aromáticos.',
      ],
    },
  ];
}
