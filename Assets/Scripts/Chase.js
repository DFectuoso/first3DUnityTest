#pragma strict

public var targetEntity : GameObject;
public var moveSpeed : float;

function Start () {

}

function Update () {
	
	
			
	transform.position = Vector3.MoveTowards(transform.position, Vector3(targetEntity.transform.position.x,transform.position.y,targetEntity.transform.position.z), moveSpeed * Time.deltaTime);

}