#pragma strict

static var playerScore1 : int = 0;
static var playerScore2 : int = 0;

var theSkin : GUISkin;

static function Score (wallName : String) {
  switch(wallName){
    case 'rightWall': playerScore1++; break;
    case 'leftWall': playerScore2++; break;
  }

}

function OnGUI () {
  GUI.skin = theSkin;
  GUI.Label (new Rect(Screen.width/2 - 150 - 12, 20, 100, 100), '' + playerScore1);
  GUI.Label (new Rect(Screen.width/2 + 150 - 12, 20, 100, 100), '' + playerScore2);
}
