#pragma strict

public var moveSpeed : float;
public var maxSpeed : float = 5f;
public var deathParticles : GameObject;

private var input : Vector3;

private var spawnPoint : Vector3;


function Start () {
	spawnPoint = transform.position;
}

function Update () {
	if(rigidbody.velocity.magnitude < maxSpeed){
		input = Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
		rigidbody.AddForce(input * moveSpeed);
	}
	
	if(transform.position[1] < 0) {
		Instantiate(deathParticles, transform.position, Quaternion.identity);
		transform.position = spawnPoint;		
	}
}

function OnCollisionEnter(otherObject:Collision) {
	if(otherObject.gameObject.tag == "Enemy"){
		Instantiate(deathParticles, transform.position, Quaternion.identity);
		
		transform.position = spawnPoint;		
	}
}