import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Caesar {
   private final static Map<Character, Integer> alphabetMap  = new HashMap<Character, Integer>(){{
        put('A', 0);
        put('B', 1);
        put('C', 2);
        put('D', 3);
        put('E', 4);
        put('F', 5);
        put('G', 6);
        put('H', 7);
        put('I', 8);
        put('J', 9);
        put('K', 10);
        put('L', 11);
        put('M', 12);
        put('N', 13);
        put('O', 14);
        put('P', 15);
        put('Q', 16);
        put('R', 17);
        put('S', 18);
        put('T', 19);
        put('U', 20);
        put('V', 21);
        put('W', 22);
        put('X', 23);
        put('Y', 24);
        put('Z', 25);
    }};
    public static void main(String[] args) {
        System.out.println("Please enter 1 for encrypt or 2 for decrypt.");
        Scanner scanner = new Scanner(System.in);
        while(!scanner.hasNextInt()){
            System.out.println("Please enter 1 or 2.");
            scanner.next();
        }
        int option = scanner.nextInt();

        if(!(option == 1 || option ==2)){
            boolean toContinue = false;
            while(toContinue == false){
                System.out.println("Please enter 1 or 2.");
                while(!scanner.hasNextInt()){
                    System.out.println("Please enter 1 or 2.");
                    scanner.next();
                }
                option = scanner.nextInt();
                if(option == 1 || option ==2){
                    toContinue = true;

                }
                else{
                    toContinue = false;
                }
            }

        }
        int key =0 ;
        if(option == 1){
            System.out.println("Please enter a text to encrypt.");
            String textToEncrypt = scanner.next();
            boolean toContinue = false;
            while(toContinue == false){
                System.out.println("Please enter a key value between 1 and 25.");
                while(!scanner.hasNextInt()){
                    System.out.println("Please enter a key value between 1 and 25.");
                    scanner.next();
                }
                key = scanner.nextInt();
                if(key >= 1 && key <= 25){
                    toContinue = true;
                }
                else{
                    toContinue = false;
                }
            }
            String encryptedText = encrypt(textToEncrypt, key);
            System.out.println("C = " + encryptedText);
        }
        else if(option == 2){
            System.out.println("Please enter a text to decrypt.");
            String textToDecrypt = scanner.next();
            boolean toContinue = false;
            while(toContinue == false){
                System.out.println("Please enter a key value between 1 and 25.");
                while(!scanner.hasNextInt()){
                    System.out.println("Please enter a key value between 1 and 25.");
                    scanner.next();
                }
                key = scanner.nextInt();
                if(key >= 1 && key <= 25){
                    toContinue = true;
                }
                else{
                    toContinue = false;
                }
            }
            String decryptedText = decrypt(textToDecrypt, key);
            System.out.println("P = " + decryptedText);
        }


    }
    public static <K, V> K getKey(Map<K, V> map, V value) {
        for (K key: map. keySet()) {
            if (value. equals(map. get(key))) {
                return key;
            }
        }
        return null;
    }

    public static String encrypt(String plainText, int shift){

        String cippherText = "";
        plainText = plainText.toUpperCase();
        for(int i = 0; i<plainText.length(); i++){
            char ch = plainText.charAt(i);
            if(Character.isLetter(ch)){
                int lookUp = (alphabetMap.get(ch) + shift) % 26;
                cippherText += getKey(alphabetMap, lookUp);

            }
            else{
                cippherText += ch;
            }

        }
        return cippherText;
    }

    public static String decrypt(String cipherText, int shift){
        String decryptedText = "";
        cipherText = cipherText.toUpperCase();
        for(int i = 0; i < cipherText.length(); i++){
            char ch = cipherText.charAt(i);
            if(Character.isLetter(ch)){
                int lookUp = (alphabetMap.get(ch) - shift) % 26;
                if (lookUp < 0){
                    lookUp += 26;
                }
                decryptedText += getKey(alphabetMap, lookUp);

            }
            else{
                decryptedText += ch;
            }

        }
        return decryptedText;
    }

}
