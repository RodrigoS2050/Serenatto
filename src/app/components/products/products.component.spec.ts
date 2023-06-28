import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
    });
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render product cards', () => {
    const productCards = fixture.nativeElement.querySelectorAll('.card');
    expect(productCards.length).toBe(component.products.length);
  });

  it('should render modal dialogs', () => {
    const modalDialogs = fixture.nativeElement.querySelectorAll('.modal');
    expect(modalDialogs.length).toBe(component.modals.length);
  });

  it('should display product title and image correctly', () => {
    component.products = [
      {
        id: '1',
        src: 'assets/cafe-tradicional.png',
        alt: 'Product Image',
        title: 'Café Preto',
      },
    ];
    fixture.detectChanges();
    const titleElement = fixture.nativeElement.querySelector('.card-body h3');
    const imageElement = fixture.nativeElement.querySelector('.card-img-top');
    expect(titleElement.textContent).toEqual('Café Preto');
    expect(imageElement.src).toContain('assets/cafe-tradicional.png');
    expect(imageElement.alt).toEqual('Product Image');
  });

  it('should display the correct product titles', () => {
    const productTitles =
      fixture.nativeElement.querySelectorAll('.card-body h3');
    const expectedTitles = component.products.map((product) => product.title);

    expect(productTitles.length).toBe(expectedTitles.length);

    for (let i = 0; i < productTitles.length; i++) {
      expect(productTitles[i].textContent).toContain(expectedTitles[i]);
    }
  });

  it('should open the modal when a product card is clicked', () => {
    const productCards = fixture.debugElement.queryAll(By.css('.card'));
    const modals = fixture.debugElement.queryAll(By.css('.modal'));

    expect(productCards.length).toBe(component.products.length);
    expect(modals.length).toBe(component.modals.length);

    for (let i = 0; i < productCards.length; i++) {
      productCards[i].nativeElement.click();
      fixture.detectChanges();

      const modal = fixture.debugElement.query(
        By.css(`#${component.modals[i].id}`)
      );
      const modalDisplay = getComputedStyle(modal.nativeElement).display;

      expect(modalDisplay).toBe('block');
    }
  });

  it('should display the correct modal titles and descriptions', () => {
    const modalTitles = fixture.nativeElement.querySelectorAll('.modal-title');
    const modalDescriptions =
      fixture.nativeElement.querySelectorAll('.modal-body p');
    expect(modalTitles.length).toEqual(6);
    expect(modalDescriptions.length).toEqual(12);
    const expectedDescriptions = [
      [
        'O café Serenatto é conhecido por seus blends tradicionais e saborosos, que agradam aos amantes da bebida. Nossos grãos são cuidadosamente selecionados e torrados para produzir um aroma rico e sabor equilibrado.',
        'Entre os cafés mais tradicionais da casa, destaca-se o "Café Serenatto", um blend exclusivo de grãos com notas de chocolate e caramelo. Outra opção popular é o "Café Italiano", um café expresso encorpado e intenso. Já o "Café Cappuccino" é uma escolha clássica para quem prefere uma bebida cremosa e suave.',
      ],
      [
        'Somos conhecidos também por nossos cafés especiais, que são cuidadosamente preparados com grãos selecionados de alta qualidade e técnicas de preparo precisas.',
        'Entre as opções de cafés especiais do Café & Bistrô Serenatto, destacamos o café aeropress, que é preparado com uma técnica de imersão e pressão, resultando em uma bebida de sabor intenso e aroma acentuado. Outra opção popular é o café Hario V60, que é preparado com um filtro de papel em formato de cone e resulta em uma bebida limpa e suave, ressaltando as notas sensoriais dos grãos. Além disso, oferecemos uma variedade de bebidas geladas, como o café gelado, que é preparado com grãos torrados escuros e servido com gelo e leite, resultando em uma bebida refrescante e saborosa.',
      ],
      [
        'Nossos smoothies e vitaminas são uma explosão de sabores e nutrientes para energizar o seu dia. Cada opção é cuidadosamente preparada com ingredientes frescos e saudáveis, garantindo uma experiência única.',
        'Experimente o Smoothie Energia Tropical, uma mistura revigorante de manga, abacaxi e banana, perfeito para começar o dia com toda a vitalidade. Ou talvez o Vitamina Verão Refrescante, feito com morango, melancia e laranja, uma combinação refrescante que traz o melhor da estação em um copo. Nossos smoothies e vitaminas são a escolha perfeita para quem busca sabor e saúde em uma só dose.',
      ],
      [
        'Nossos pães e focaccias são assados artesanalmente, com ingredientes selecionados e paixão pela panificação. Cada mordida é uma experiência deliciosa e reconfortante. Experimente o Pão Multigrãos, uma combinação de sementes e grãos que resulta em uma textura crocante e um sabor único.',
        'Para os amantes de focaccia, temos a Focaccia Mediterrânea, com azeite de oliva, tomate seco e alecrim, proporcionando um sabor mediterrâneo irresistível. Nossos pães e focaccias são perfeitos para acompanhar um café especial ou simplesmente saborear como um lanche satisfatório a qualquer hora do dia.',
      ],
      [
        'Nossas sobremesas são verdadeiras obras de arte açucaradas, criadas com maestria para agradar os paladares mais exigentes. Cada doce é cuidadosamente elaborado com ingredientes de alta qualidade e uma pitada de criatividade.',
        'Experimente o Bolo de Chocolate Supremo, uma tentação para os amantes de chocolate, com camadas de bolo fofinho, recheio cremoso e cobertura indulgente. Ou talvez o Cheesecake de Frutas Vermelhas, uma combinação perfeita de suavidade e acidez, com uma base crocante de biscoito. Nossos doces são o ponto alto de qualquer refeição e vão satisfazer os desejos mais doces.',
      ],
      [
        'Nossos salgados são uma explosão de sabores e texturas, ideais para satisfazer aquele desejo por algo salgado e delicioso. Cada opção é preparada com cuidado e ingredientes frescos, garantindo uma experiência gastronômica excepcional.',
        'Experimente o Croissant Recheado, uma massa folhada crocante e dourada, recheada com queijo derretido e presunto defumado. Ou talvez o Empadão de Frango, com uma massa macia e desmanchando, recheada com frango suculento e temperos aromáticos.',
      ],
    ];
    let descriptionIndex = 0;
    for (let i = 0; i < modalTitles.length; i++) {
      expect(modalTitles[i].textContent).toContain(component.modals[i].title);

      for (let j = 0; j < 2; j++) {
        expect(modalDescriptions[descriptionIndex].textContent.trim()).toBe(
          expectedDescriptions[i][j]
        );
        descriptionIndex++;
      }
    }
  });
});
