import java.util.Scanner;

public class Atividade13{
    public static void main(String[] args){

        /* Faça um programa que leia  3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.  */

        Scanner in = new Scanner(System.in);
        System.out.println("Informe o primeiro valor");
        int valor1 = in.nextInt();

        System.out.println("Informe o segundo valor");
        int valor2 = in.nextInt();

        System.out.println("Informe o terceiro valor");
        int valor3 = in.nextInt();

        if(valor1 < valor2 && valor1 < valor3){
            System.out.println("Os dois maiores valores sao "+valor2+" e "+valor3+". E a soma desses valores e "+(valor2+valor3));

        } else if(valor2 < valor1 && valor2 < valor3){
            System.out.println("Os dois maiores valores sao "+valor1+" e "+valor3+". E a soma desses valores e "+(valor1+valor3));;

        }else if(valor3 < valor1 && valor3 < valor2){
            System.out.println("Os dois maiores valores sao "+valor1+" e "+valor2+". E a soma desses valores e "+(valor1+valor2));;

        }
    }
}
//OK