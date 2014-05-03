#pragma strict

public var patrolPoints : Transform[];
public var moveSpeed : float;

private var currentPoint : int = 0;

function Start () {
	transform.position = patrolPoints[0].position;
}

function Update () {
	
	// Are we there yet?
	if(transform.position == patrolPoints[currentPoint].position){
		currentPoint++;
		
		if(currentPoint == patrolPoints.Length){
			currentPoint = 0;
		}
	}	
	
	transform.position = Vector3.MoveTowards(transform.position, patrolPoints[currentPoint].position, moveSpeed * Time.deltaTime);

}