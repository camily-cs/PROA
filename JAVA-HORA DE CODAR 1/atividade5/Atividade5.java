import java.util.Scanner;


public class Atividade5{
    public static void main(String[] args){

        /* Areas de Figuras Planas - Quadrado */
        System.out.println("Informe o lado do quadrado");
        Scanner in = new Scanner(System.in);
        int lado = in.nextInt();

        System.out.println("A area do quadrado e "+lado * lado+".");

        in.close();
}}
//OK