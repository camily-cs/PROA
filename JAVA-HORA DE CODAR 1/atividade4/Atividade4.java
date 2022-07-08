import java.util.Scanner;

public class Atividade4{
    public static void main(String[] args){

        /* Areas de Figuras Planas - Retangulo */
        System.out.println("Informe a base do retangulo");
        Scanner in = new Scanner(System.in);
        int base = in.nextInt();

        System.out.println("Informe a altura do retangulo");
        int altura = in.nextInt();

        System.out.println("A area do retangulo e "+base * altura+".");

        in.close();
}}
//OK