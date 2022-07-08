import java.util.Scanner;


public class Atividade6{
    public static void main(String[] args){
        /* Areas de Figuras Planas - Losango */
        System.out.println("Informe a diagonal maior");
        Scanner in = new Scanner(System.in);
        int diagMaior = in.nextInt();

        System.out.println("Informe a diagonal menor");
        int diagMenor = in.nextInt();

        System.out.println("A area do losango e "+(diagMaior * diagMenor) / 2+".");

        in.close();

}}
//OK