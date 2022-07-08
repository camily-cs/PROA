import java.util.Scanner;

public class Atividade10{
    public static void main(String[] args){

        /* Areas de Figuras Planas - Circulo */
        System.out.println("Informe o raio");
        Scanner in = new Scanner(System.in);
        int raio = in.nextInt();

        System.out.println("A area do circulo e "+ 3.14 * (raio * raio));

        in.close();
    }
}
//OK