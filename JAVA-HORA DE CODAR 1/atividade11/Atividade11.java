import java.util.Scanner;

public class Atividade11{
    public static void main(String[] args){

        /* Faça um programa que leia um valor informado pelo usuario e diga se o valor informado e positivo, negativo ou zero. */
        System.out.println("Informe um valor");
        Scanner in = new Scanner(System.in);
        int valorInformado = in.nextInt();

        if(valorInformado > 0){
            System.out.println("O valor informado foi "+ valorInformado +". Esse valor e positivo.");
        } else if(valorInformado == 0) {
            System.out.println("O valor informado foi 0.");
        } else {
             System.out.println("O valor informado foi "+ valorInformado +". Esse valor e negativo.");
        }

        in.close();
    }   
}
//OK