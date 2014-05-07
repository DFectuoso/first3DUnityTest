#pragma strict

public var delayTime : float;

function Start () {
	Destroy(gameObject, delayTime);
}

function Update () {

}