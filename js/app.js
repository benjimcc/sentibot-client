
angular.module('myApp', [
  'ngMaterial',
  'pusher-angular'
]).controller('myController', ['$scope','$pusher',function($scope,$pusher) {
	var client = new Pusher('62362d4fe56c3f10f0c6');
    var pusher = $pusher(client);
	var my_channel = pusher.subscribe('sentibot');

	$scope.messages = []

	my_channel.bind('tweet', function(data){
		console.log(data);
		$scope.messages.push(data);
	}
	);

		var tally = {};

	var positiveColor = '#FF8586';
	var negativeColor = '#63A69F';
	var neutralColor = '#DECEB3';

	var positive = {
		type: 'positive',
		icon: 'grinning-face.png'
	};
	var happy = {
		type: 'positive',
		icon: 'smiling-face.png'
	};
	var lovely = {
		type: 'positive',
		icon: 'heart-eyed-happy-face.png'
	};
	var negative = {
		type: 'negative',
		icon: 'pensive-face.png'
	};
	var sad = {
		type: 'negative',
		icon: 'crying-face.png'
	};
	var angry = {
		type: 'negative',
		icon: 'angry-face.png'
	};
	var sick = {
		type: 'negative',
		icon: 'sick-face.png'
	};

	var positiveWords = [
		 'excellent', 'amazing', 'beautiful', 'nice', 'marvelous', 'magnificent', 'fabulous', 'astonishing', 'fantastic', 'peaceful', 'fortunate', 
		 'brilliant', 'glorious', 'cheerful', 'gracious', 'grateful', 'splendid', 'superb', 'honorable', 'thankful', 'inspirational',
		 'ecstatic', 'victorious', 'virtuous', 'proud', 'wonderful', 'lovely', 'delightful'
	];
	var happyWords = [
		'happy', 'lucky', 'awesome', 'excited', 'fun', 'amusing', 'amused', 'pleasant', 'pleasing', 'glad', 'enjoy',
		'jolly', 'delightful', 'joyful', 'joyous', ':-)', ':)', ':-D', ':D', '=)','☺'
	];
	var lovelyWords = [
		'love', 'adore', 'blissful', 'heartfelt', 'loving', 'lovable', 'sweetheart', 'darling', 'kawaii', 'married', 'engaged'
	];
	var negativeWords = [
		'unhappy', 'bad', 'sorry', 'annoyed', 'dislike', 'anxious', 'ashamed', 'cranky', 'crap', 'crappy', 'envy', 
		'awful', 'bored', 'boring', 'bothersome', 'bummed', 'burned', 'chaotic', 'defeated', 'devastated', 'stressed',
		'disconnected', 'discouraged', 'dishonest', 'doomed', 'dreadful', 'embarrassed', 'evicted', 'freaked out', 'frustrated', 'stupid',
		'guilty', 'hopeless', 'horrible', 'horrified', 'humiliated', 'ignorant', 'inhumane', 'cruel', 'insane', 'insecure',
		'nervous', 'offended', 'oppressed', 'overwhelmed', 'pathetic', 'powerless', 'poor', 'resentful', 'robbed', 'screwed'
	];
	var sadWords = [
		'sad', 'alone', 'anxious', 'depressed', 'disappointed', 'disappointing', 'sigh', 'sobbing', 'crying', 'cried', 
		'dumped', 'heartbroken', 'helpless', 'hurt', 'miserable', 'misunderstood', 'suicidal', ':-(', ':(', '=(', ';('
	];
	var angryWords = [
		'hate', 'damn', 'angry', 'betrayed', 'bitched','disgust', 'disturbed', 'furious', 'harassed', 'hateful', 'hostile', 'insulted',
		'irritable', 'jealous', ' rage ', 'pissed'

	];
	var sickWords = [
		'sick', ' ill ', 'under weather', 'throw up', 'threw up', 'throwing up', 'puke', 'puking', 'pain', 'hangover', 'intoxicated'
	];
	

}]);