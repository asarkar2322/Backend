package mconfiguration;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;
import java.util.ArrayList;
public class MConfigurationMain {

String filename="config.txt";
MConfirguration[] mconfig = new MConfirguration[4];
public static void main(String[] args) {
	MConfigurationMain t = new MConfigurationMain();
    t.mconfig[0] = new MConfirguration("A","B","d","ui","r");
    t.mconfig[1] = new MConfirguration("C","D","e","yu","r");
    t.mconfig[2] = new MConfirguration("E","F","1L","78","2L");
    t.mconfig[3] = new MConfirguration("G","H","1L","78","2L");
    t.writeFile();
    t.readFile();
    t.update();
    t.readFile();
}
public void writeFile()
{
    try
    {
       FileOutputStream fos = new FileOutputStream(filename);
       ObjectOutputStream oos = new ObjectOutputStream(fos);
       oos.writeObject(mconfig);
       oos.close();
       System.out.println("File Saved");
    }
    catch(Exception e) {
        System.out.println("Error in output:" + e.toString());
    }
}
public void readFile()
{
    try
    {
        FileInputStream fis = new FileInputStream(filename);
        ObjectInputStream ois = new ObjectInputStream(fis);
        MConfirguration[] lmconfig = (MConfirguration[]) ois.readObject();
        for(int i = 0; i < 4; i++){
            System.out.println("room name = " + lmconfig[i].getRoomname()
            		+ " Sip User = " + lmconfig[i].getSipuserid()
            		+ " passwod = " + lmconfig[i].getSippassword()
            		+ " status = " + lmconfig[i].getRoomstatus()
            		+ " Conference number = " + lmconfig[i].getConfnumber());
        }
        ois.close();   
        System.out.println("File Imported");
    }
    catch(Exception e)
    {
        System.out.println("Error in output:" + e.toString());
    }
}

public void update()
{
    try
    {
    	 
    	 FileInputStream fis = new FileInputStream(filename);        
        ObjectInputStream ois = new ObjectInputStream(fis);
        MConfirguration[] lmconfig = (MConfirguration[]) ois.readObject();
        for(int i = 0; i < 4; i++){
        	if(i==1) {
        		FileOutputStream fos = new FileOutputStream(filename);
        		ObjectOutputStream oos = new ObjectOutputStream(fos);
        		lmconfig[i].setRoomname("abhijit");
        		oos.writeObject(lmconfig);
        		oos.close();
        		
        	}
            
        }
        ois.close();
        System.out.println("File Imported");
    }
    catch(Exception e)
    {
        System.out.println("Error in output:" + e.toString());
    }
}

}


