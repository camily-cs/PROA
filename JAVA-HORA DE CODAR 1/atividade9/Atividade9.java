import java.util.Scanner;

public class Atividade9{
    public static void main(String[] args){

        /* Areas de Figuras Planas - Triangulo */
        System.out.println("Informe a base");
        Scanner in = new Scanner(System.in);
        int base = in.nextInt();

        System.out.println("Informe a altura");
        int altura = in.nextInt();

        System.out.println("A area do triangulo e "+ base * altura / 2 +".");

        in.close();
    }
}
//OK