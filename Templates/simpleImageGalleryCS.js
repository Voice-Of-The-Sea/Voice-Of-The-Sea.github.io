var num=0;

imgArray = [
  ['Images/Products/Card_Sets/Jpgs01Be_Sce_ne_You.jpg',' ', 
   '<br> Be Sce-ne You'],
  ['Images/Products/Card_Sets/Jpgs02Cephalopods.jpg',' ',
   '<br> Cephalopods'],
  ['Images/Products/Card_Sets/Jpgs03Crinoid_Creation_Set1.jpg',' ',
   '<br> Crinoid Creations - Set 1'],
  ['Images/Products/Card_Sets/Jpgs04Crinoid_Creation_Set2.jpg','interference','<br> Crinoid Creations - Set 2'],
    ['Images/Products/Card_Sets/Jpgs05Friends_of_Anemone.jpg',' ',
   '<br> Friend or Anemone'],
	['Images/Products/Card_Sets/Jpgs06KalaidoCoralSet2.jpg',' ',
   '<br> Kaleido-Coral Set 2'],
	['Images/Products/Card_Sets/Jpgs07KalaidoCoralSet1.jpg',' ',
   '<br> Kaleido-Coral Set 1'],
	['Images/Products/Card_Sets/Jpgs08NoSlugsAllowedSet1.jpg',' ',
   '<br> No Slugs Allowed - Set 1'],
	['Images/Products/Card_Sets/Jpgs09NoSlugsAllowedSet2.jpg',' ',
   '<br> No Slugs Allowed - Set 2'],
	['Images/Products/Card_Sets/Jpgs10NoSlugsAllowedSet3.jpg',' ',
   '<br> No Slugs Allowed - Set 3'],
	['Images/Products/Card_Sets/Jpgs11NoSlugsAllowed.jpg',' ',
   '<br> Ornate Urchins'],
	['Images/Products/Card_Sets/Jpgs12PipefishParade.jpg',' ',
   '<br> Pipefish Parade'],
	['Images/Products/Card_Sets/Jpgs13SeaPrize.jpg',' ',
   '<br> Sea-prise!'],
	['Images/Products/Card_Sets/Jpgs14SeahorseSalad.jpg',' ',
   '<br> Seahorse Salad'],
	['Images/Products/Card_Sets/Jpgs15SomethingsFishy1.jpg',' ',
   '<br> Something is Fishy - Indonesia 1'],
	['Images/Products/Card_Sets/Jpgs16SomethingsFishy2.jpg',' ',
   '<br> Something is Fishy - Indonesia 2'],
	['Images/Products/Card_Sets/Jpgs17StaryNightsSet1.jpg',' ',
   '<br> Star-ry, Star-ry Nights - Set 1'],
	['Images/Products/Card_Sets/Jpgs18StaryNightsSet2.jpg',' ',
   '<br> Star-ry, Star-ry Nights - Set 2'],
	['Images/Products/Card_Sets/Jpgs19SurfNoTurfSet4.jpg',' ',
   '<br> Surf, No Turf - Set 4'],
	['Images/Products/Card_Sets/Jpgs20SurfNoTurfSet1.jpg',' ',
   '<br> Surf, No Turf - Set 1'],
	['Images/Products/Card_Sets/Jpgs21SurfNoTurfSet2.jpg',' ',
   '<br> Surf, No Turf - Set 2'],
	['Images/Products/Card_Sets/Jpgs22SurfNoTurfSet3.jpg',' ',
   '<br> Surf, No Turf - Set 3'],
	['Images/Products/Card_Sets/Jpgs24ThatsAMoreySe2.jpg',' ',
   '<br> Thats A-Moray - Set 2'],
	['Images/Products/Card_Sets/Jpgs24Tortuga.jpg',' ',
   '<br> Tortuga'],
	['Images/Products/Card_Sets/Jpgs25WormYourWayIntoMyHear.jpg',' ',
   '<br> Worm Your Way Into My Heart - Set 1'],
	['Images/Products/Card_Sets/Jpgs26WormYourWayIntoMyHear.jpg',' ',
   '<br> Worm Your Way Into My Heart - Set 2'],
	['Images/Products/Card_Sets/Jpgs27ThatsAMoreySet1.jpg',' ',
   '<br> Thats A-Moray - Set 1']
  ]

function slideshow(slide_num) {
  document.getElementById('mypic').src=imgArray[slide_num][0];
  document.getElementById('mypic').alt=imgArray[slide_num][1];
  document.getElementById('burns').innerHTML=imgArray[slide_num][2];
}

function slideshowUp() {
  num++;
  num = num % imgArray.length;
  slideshow(num);
}

function slideshowBack() {
  num--;
  if (num < 0) {num=imgArray.length-1;}
  num = num % imgArray.length;
  slideshow(num);
}
// JavaScript Document