#pragma strict

public var targetEntity : GameObject;
public var moveSpeed : float;

function Start () {

}

function Update () {
	
	
			
	transform.position = Vector3.MoveTowards(transform.position, targetEntity.transform.position, moveSpeed * Time.deltaTime);

}