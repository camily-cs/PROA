import java.util.Scanner;

public class Atividade7{
    public static void main (String[] args){

        /* Areas de Figuras Planas - Trapezio */
        System.out.println("Informe a base maior");
        Scanner in = new Scanner(System.in);
        int baseMaior = in.nextInt();

        System.out.println("Informe a base menor");
        int baseMenor = in.nextInt();

        System.out.println("Informe a altura");
        int altura = in.nextInt();

        System.out.println("A area do trapezio e "+ (baseMaior+baseMenor) * altura / 2+".");

        in.close();
    }
}
//OK