import java.util.Scanner;

public class Atividade14{
    public static void main(String[] args) {

    /* Faça um para ler 2 valores informados pelo usuário e se o segundo valor informado for ZERO, deve ser lido um novo valor, ou seja, para o segundo valor não pode ser aceito o valor zero nem negativo e imprimir o resultado da divisão do primeiro valor lido pelo segundo valor lido.  */
        Scanner in = new Scanner(System.in);
        boolean teste = false;

        /* do-faça */
        do{
            System.out.println("Informe o primeiro valor");
            int valor1 = in.nextInt();

            System.out.println("Informe o segundo valor");
            int valor2 = in.nextInt();

            if(valor2 == 0 || valor2 < 0){
            System.out.println("Valor invalido. Por favor, informe um numero positivo");
            teste = true;

            } else{
                teste=false;
                System.out.println("A divisao do primeiro valor pelo segundo valor e "+valor1/valor2);
            }

        } /* while-enquanto o numero digitado for negativo */
            while (teste = true);

        in.close();
    }
}
//OK