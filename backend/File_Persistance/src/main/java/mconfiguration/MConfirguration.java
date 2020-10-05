package mconfiguration;

import java.io.Serializable;

public class MConfirguration implements Serializable {

	 //default serialVersion id
    private static final long serialVersionUID = 1L;
    
    private String roomname;
    private String sipuserid;
    private String sippassword ;
    private String roomstatus;
    private String confnumber;
    
    public MConfirguration(String roomname, String sipuserid, String sippassword,String roomstatus,String confnumber) {
		super();
		this.roomname = roomname;
		this.sipuserid = sipuserid;
		this.sippassword = sippassword;
		this.roomstatus=roomstatus;
		this.confnumber=confnumber;
	}
    
 
    public String getRoomname() {
		return roomname;
	}


	public void setRoomname(String roomname) {
		this.roomname = roomname;
	}


	public String getSipuserid() {
		return sipuserid;
	}


	public void setSipuserid(String sipuserid) {
		this.sipuserid = sipuserid;
	}


	public String getSippassword() {
		return sippassword;
	}


	public void setSippassword(String sippassword) {
		this.sippassword = sippassword;
	}


	
 
    
    public String getRoomstatus() {
		return roomstatus;
	}


	public void setRoomstatus(String roomstatus) {
		this.roomstatus = roomstatus;
	}


	


	public String getConfnumber() {
		return confnumber;
	}


	public void setConfnumber(String confnumber) {
		this.confnumber = confnumber;
	}


	@Override
    public String toString() {
        return new StringBuffer(" Room Name: ").append(this.roomname)
                .append(" SIP User id : ").append(this.sipuserid)
                .append(" Sip User Password : ").append(this.sippassword)
                .append(" Room Status : ").append(this.roomstatus)
                .append("Conference Number: ").append(this.confnumber).toString();
    }
 
}