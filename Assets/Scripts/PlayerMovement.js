#pragma strict

public var moveSpeed : float;
public var maxSpeed : float = 5f;

private var input : Vector3;

function Start () {

}

function Update () {
	if(rigidbody.velocity.magnitude < maxSpeed){
		input = Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
		rigidbody.AddForce(input * moveSpeed);
	}
}