import java.util.Scanner;

public class Atividade8{
    public static void main (String[] args){

        /* Areas de Figuras Planas - Paralelogramo */
        System.out.println("Informe a base");
        Scanner in = new Scanner(System.in);
        int base = in.nextInt();

        System.out.println("Informe a altura");
        int altura = in.nextInt();

        System.out.println("A area do paralelogramo e "+ base * altura +".");

        in.close();
    }
}
//OK