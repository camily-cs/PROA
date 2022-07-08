import java.util.Scanner;

public class Atividade2{
    public static void main(String[] args){

        /* 2-Escreva um programa em Java em que o usuário informe o seu nome e exiba a mensagem "Olá, [NomeDoUsuario]". */
        System.out.println("Informe o seu nome");
        Scanner in = new Scanner(System.in);
        String nome = in.next();
        System.out.println("Ola, "+ nome);

        in.close();
    }
}
/* OK */