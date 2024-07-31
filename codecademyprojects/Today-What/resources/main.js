

//Global variables
let noteNumber = document.getElementById('quantity');
let contentBox = document.getElementById('instructions');
const pullBtn = document.getElementById('draw-button');
const goBack = document.getElementById('back-button');

//Used to save extracted data from local storage.
let retString;
let retArray;

//Used to store random number that we will use it to extract the random message.
let noteNum;

//Used to store the message in a variable.
let finalNote;

//Used to store the number of messages left to draw.
let notesLeft;

//Used to save messages indexes that has been drwan into an array so it will not be drwan again until all messages from the messages array has been drawn, bassically you will not see a message twice until all the messages from the messages array has been seen once.
let notesPulled;

//Used to convert the array containing messages indexes that has already been extracted and it is stored into an array into a string to be saved into local storage.
let string;

//Used to store messages into an array.
const notesList = [
    'Trust the wait, Embrace the uncerteinty, Enjoy the beauty of becoming!',
    'Wake up with Determination, Go to bed with Satisfaction!',
    'Your next chapter is going to be amazing!',
    "Old ways won't open newdoors!",
    'I can & I will, Watch me!',
    'One small positive change in the morning can change your whole day!',
    'My first blessing of the day, I woke up!',
    'You get in life what you have the courage to ask for!',
    'Just for the record, not all positive change feels positive in the beginnig!',
    "Don't downgrade your dream just to fit your reality. Upgrade your conviction to match your destiny!",
    'When you focus on the good, the good gets better!',
    "If you believe it will work out, you`ll see opportunities. If you believe it won't, you will see obstacles!",
    'Do not ignore your own potential!',
    'Something wonderful is about to happen!',
    'Know your worth & then add tax!',
    'Today is a beautiful day and you will attract good things into your life!',
    'Do something today that your future self will thank you',
    'You are loved. You have purpose. You are a masterpiece. You are wonderfully made.',
    'Do not let fear Decide your future!',
    'Life is full of chalanges, seen and unseen. So to look and feel great, you must hold your head up each day and project your inner confidence!',
    'The secret to change is to focus all your energy not on fighting the old but on building the new!',
    'Look in the mirror. That`s your competition!',
    'Optimism is a happiness magnet. If you stay positive, good things and good people will be drawn to you!',
    'It`s your life. Live it well!',
    'We tend to forget that happiness doesn`t come as a result of getting something we don`t have, but rather of recognising and appreciating what we do have!',
    'Happiness is free, sprinkle that stuff everywhere!',
    'Think positive, feel positive and positive things will happen!',
    'Happiness cannot be travelled to, owned, earned, worn or consumed. Happiness comes from within!',
    'Keep going! Keep growing!',
    'Someday everythingll make perfect sense. So for now, laugh at the confusion, smile through the tears and keep reminding yourself that everything happens for a reason!',
    'It`s kind of fun to do the impossible!',
    'The happiness of your life depends upon the quality of your thoughts!',
    'For every minute you are angry, you loose sixty seconds of happiness!',
    'When you are at peace you attract positive energy!',
    'Today I open my mind and my heart, I am allowing happiness to enter!',
    'It always seems imposible until it`s done!',
    'Always remember you are braver than you belive, stronger than you seem, smarter than you think and twice as beautiful as you`ve ever imagined!',
    'Change your thoughts and your whole world changes!',
    'You are the architect of your reality. You choose your thought, perceptions and your reaction to external forces!',
    'It is in your moments of decision that your destiny is shaped!',
    'Follow your bliss and the universe will open doors where there were only walls!',
    'Learn to enjoy every minute of your life, be happy now!',
    'As we work to create light for others, we naturally light our own way!',
    'Every dream begins with a dreamer!',
    'Logic will take you from A to B. Imagination will take you everywhere!',
    'The best way to predict the future is to invent it!',
    'Happiness can be found in the darkest of places, if only one remembers to turn on the light!',
    'A tiny change today brings a wonderfully different tommorow!',
    'The price of anything is the amount of life you exchange for it!',
    'One day can change everything!', 'You have to dream before your dreams can come true!',
    'Laughter is medicine!',
    'You might be worhless to one person but piceless to another. Never doubt your value!',
    'No matter what people tell you, Words and ideas can change the world!',
    'People are going to talk about you no matter what you do. So you might as well do whatever brings you joy and live your best life!',
    'A smile is a facelift everyone can afford!',
    'Forgiveness is a gift you give yourself!',
    'People who wonder if the glass is half full or half empty miss the point. The glass is refillable!',
    'Welcome to your Happy Jar. Remember you are in complete control of your happiness!',
    'Failure is success if you learn from it!',
    'If you want it you will find a way!',
    'A DIAMOND IS A CHUNK OF COAL THAT DID WELL UNDER PRESSURE!',
    'ONE DAY AT A TIME!',
    'NO MATTER WHAT HAPPENS TODAY, I WILL FIND THE POSITIVE IN IT!',
    'Do more of what lights you up and makes you feel alive. The world needs your spark!',
    'Nobody but you has to belive in your dreams to make them reality!',
    'Where there is a will, there is a way!',
    'DECISIONS DETERMINE DESTINY!!!',
    'EVERY MOMENT IS A NEW START !',
    'It`s important to feel good about yourself. When you feel good, nothing negative can touch you!',
    'YOU CAN MAKE IT HAPPEN !',
    'WE ARE WHAT WE BELIEVE WE ARE !',
    'No one is in control of your happiness, but you. Therefore, you have the power to change anything about yourself or your life!',
    'NEVER NEVER NEVER GIVE UP !',
    'Interrupt anxiety with GRATITUDE !',
    'One Day or Day One, it`s your choice!',
    'Everything happens for a reason!',
    'It`s amazing, life changes very quickly in a very positive way, if you let it!',
    'DON`T FIND FAULT, FIND A REMEDY!',
    'Sometimes if you want to see change for the better, you have to take things into your own hands!',
    'Happiness is like a kiss. You must share it to enjoy it!',
    'If your troubles in life are as big as a ship, remember, your blessings are as wide as the ocean!',
    'Remember that the happiest people are not those getting more, but those givving more!',
    'Passion + Consistency = Success !',
    'CHANGE BRINGS OPPORTUNITY !',
    'Be happy with what you have. Be excited about what you want!',
    'You must do the things you think you cannot do!',
    'BE KIND TO UNKIND PEOPLE, THEY NEED IT THE MOST!',
    'Take it all one day at a time and enjoy the journey!',
    'All we have is now!',
    'You are assigned mountains to show people that they can be moved!',
    'Happiness is an inside job !',
    'Integrity is doing the right thing even when no one is watching!',
    'Happiness is the spiritual experience of living every minute with love, grace and gratitude!',
    'Perfectly Imperfect !',
    'Wht we think we create. What we feel we attract. What we imagine we become!',
    'Life begins at the end of your comfort zone!',
    'NO PRESSURE NO DIAMONDS !',
    'Trust that greater things are aligning. Let go gracefully!',
    'Be happy for this moment. This moment is your life!',
    'NOT EVERYTHING NEEDS TO BE PERFECT TO BE WONDERFUL!',
    'Expect me my rise to the top is inevitable!',
    'I never loose, I either win or learn!',
    'You are capable of doing amazing things!',
    'Nothing changes if Nothing changes!',
    'Belive you can and you are half way there!',
    'You wanted a sign? This is a sign!',
    'A little progress each day adds up to BIG RESULTS !',
    'To do: <br> Live in the moment...',
    'A smile is happiness you`ll find right under your nose!',
    'Your future needs you, your past doesn`t!',
    'Underestimate me. That will be fun!',
    'Dont belive everything you think!',
    'Happiness is like jam. You can`t spread even a little without getting some on yourself!',
    'Always remember to fall asleep with a dream and wake up with a purpose!',
    'Be thankful for each new day!',
    'When a negative thought comes in, think 3 positive thoughts. Train your brain to flip the script!',
    'Make yourself a priority!',
    'Belive, act and live like you already have it. Its coming!',
    'Love your body, you only have one!',
    'Feeling beautiful has nothing to do with the way you look!',
    'Let no one discourage you from your ambitious attitude. You don`t need a fan club to achieve your goals. Be your own motivation!',
    'Failure is not opposite of success. It is part of success!',
    'Why do we close our eyes when we pray, cry, kiss or dream? Because the most beautiful things in life are felt!',
    'The positive thinker sees the invisible, feels the intangible and achieves the impossible!',
    'You are allowed to be a masterpiece and a work in progress at the same time!',
    'Be so happy that when others look at you they are inspired to be happy too!',
    'People say motivation doesn`t last, well neither does the bathing which is why we recommend it daily!',
    'You didn`t come this far to only come this far!',
    'Make today count. You will never get it back!',
    'If you look for positive things in life, you will find them!',
    'Purpose fuels passion!',
    'Surround yourself with people who want to see you fly too!',
    'MISSION: Be so busy loving your life, that you have no time for doubt, worry, hate or fear!',
    'Confidence comes not from always being right, but from not fearing to be wrong!',
    'If you can stay positive in a negative situation you win!',
    'Make yourself proud!',
    'You can do it!',
    'FREEDOM LIES IN BEING BOLD !',
    'OPEN YOUR EYES AND NOTICE THE BEAUTY OF THIS WONDERFUL WORLD !',
    'Don`t forget to drink some water and get some sun. You are bassically a house plant with more complicated emotions!',
    'WHEN YOU FEEL LIKE QUITTING, REMEMBER WHY YOU STARTED!',
    'IF YOU WANT TO BE MAPPY.  BE !',
    'Put your heart, mind and soul even into your smallest acts. This is the secret of success!',
    'SMILE AND LET THE WORLD WONDER WHY !',
    'Dear Body. I LOVE YOU!',
    'FIND HAPPINESS IN THE LITTLE THIINGS !',
    'WHEN I LET GO OF WHAT I AM, I BECOME WHAT I MIGHT BE!',
    'You are responsible for your own happiness!',
    'Sometimes the smallest step in the right direction, ends up being the biggest step of your life!',
    'AWAKE!<br> BLESSED!<br> GRATEFUL!',
    'IF NOT NOW. WHEN?',
    'Don`t just be good to others. Be good to yourself!',
    'DREAMS COME TRUE !',
    'THOUGHTS BECOME REALITY. CHOOSE YOUR THOUGHTS WISELY!',
    'Always deliver more than people expect!',
    'APPRECIATE THE MOMENT !',
    'You are the artist of your life. Don`t give the paintbrush to anyone else!',
    'NEVER FORGET ANYTHING THAT MADE YOU SMILE!',
    'HOW YOU LOVE YOURSELF IS HOW YOU TEACH OTHERS TO LOVE YOU !',
    'SOMETIMES LIFE IS ABOUT RISKING EVERYTHING FOR A DREAM NO ONE CAN SEE BUT YOU!',
    'Never let the things you want, make you forget the things you have!',
    'Be selective in your battles.. Sometimes peace is better than being right!',
    'Inhale confidence, exhale doubt!',
    'Little by little, day by day what is meant for you, will find its way...',
    'Where focus goes energy follows!',
    'If you see someone without a smile give them yours!',
    'Exhale the past, Inhale the future!',
    'We cannot become what we want by remaining who we are.',
    'ASPIRE TO INSPIRE !',
    'Then one day, when you least expect it, the great adventure finds you.',
    'YOU ARE ENTIRELY UP TO YOU!',
    'Plant dreams, will grow miracles!',
    'DO IT FOR YOU!',
    'WE RISE BY LIFTING OTHERS !',
    'Don`t let yesterday take too much of tomorrow!',
    'YOU CAN... <br>END OF STORY!',
    'It`s a good day to be HAPPY!',
    'You are what you do, not what you say you will do!',
    'No one is you & that is your power!',
    'Be enough for yourself first, the rest of the world can wait!',
    ': ( :  <br> You decide!',
    'WHEN YOU`RE TRUE TO WHO YOU ARE, AMAZING THINGS HAPPEN!',
    'If you want to fly, give up everything that weighs you down!',
    'Dear future. I am ready!',
    'Your life isn`t yours if you always care about what  others think!',
    'May the flowers reminds us why the rain was so necessary!',
    'IT`S ON.. Time to make the magic happen!',
    'EXPECT NOTHING. APPRECIATE EVERYTHING!',
    'A grateful heart is a magnet for miracles!',
    'THIS IS THE BEGINNING OF LOVIG YOURSELF, WELCOME HOME!',
    'Opportunities don`t happen, you create them!',
    'When you learn how much you are worth, you will stop giving people discounts!',
    'The best and most beautiful things in the world cannot be seen or even touched!',
    'Start where you are! <br> Use what you have! <br> Do waht you can!',
    'Dont forget you can: <br>- Start late <br>- Start over<br>- Be unsure<br>- Try and fail. <br> And still succeed!',
    'IF YOU DON`T LIKE  WHERE YOU ARE, MOVE! YOU ARE NOT A TREE.'
    /*
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
    */
    ];


//Getting the string with messages indexes that has been drawn and saved last time user drawn a message.
retString = localStorage.getItem("totalNotes");

//Converting the string containing messages indexes that has been already drawn and saved into local storage back to an array and assign it to messagesDrawn variable so the program knows what messages the user already drawn.
notesPulled = JSON.parse(retString);
//For first time use or when there is nothing in local storage.
if (notesPulled === null) {
    notesPulled = [];
}

//Function that take a random message, also checks if the message drawn has been drawn before, it will return a message that has not been drawn before, once all messages from the messagesList array has been returned it will reset.
const takeMessage = () => {
    //Getting a random number for use it to extract a random message from the list.
    noteNum = Math.floor(Math.random() * notesList.length);
    if (notesPulled.length === notesList.length - 1) {
        notesPulled = [];
    }
//Used to check if message has been returned before, if true it will draw another message and check again until the message drawn was not shaved before at which point it will be saved rerurned and pushed in drawn array.
    while (notesPulled.includes(noteNum) === true || noteNum === 0) {
        noteNum = Math.floor(Math.random() * notesList.length);
        //console.log(messageNum);
    }
    notesPulled.push(noteNum);
    
    return notesList[noteNum];

}

//Checking how many draws are left to be drawn by user.
notesLeft = notesList.length - notesPulled.length + 1;
noteNumber.innerHTML = `Notes in the jar: ${notesLeft} !`;
if(notesLeft === 0) {
    notesPulled = [];
    notesLeft = notesList.length - notesPulled.length;
}

//Create an event listener for Draw button

pullBtn.addEventListener('click', () => {
    //Finding out how many messages are left in the jar and reseting the jar once empty.
    notesLeft = notesList.length - notesPulled.length;
    if(notesLeft === 0) {
    notesPulled = [];
    notesLeft = notesList.length - notesPulled.length;
}
    //Getting the message.
    finalNote = takeMessage();

    //Displaying the message Index.
    noteNumber.innerHTML = `Note no: ${noteNum}`;

    //Creating the element where we will append the message.
    let note = document.createElement('h2');

    //Adding style to the message.
    note.style = 'color: #001530; text-shadow: 2px 2px 5px #4200008c; font-style: italic;';

    //Appending the message to the element.
    note.innerHTML = finalNote;

    //Clear the content div that contains the Directions and Ingredients.
    contentBox.innerHTML = '';

    //Appending the element containing the message to the content div.
    contentBox.appendChild(note);

    //Making Pull Button dissapear.
    pullBtn.style = 'display: none;';

    //Making Back button appear
    goBack.style = 'display: block;';

    //Converting the array containing pulled messages into a string so we can store it on user local storage.
    string = JSON.stringify(notesPulled);

    //Setting or replacing the local storage content variable and exporting the array for later retrieve
    localStorage.setItem("totalNotes", string);
});


goBack.addEventListener('click', () => {
    // Displaying Notes left in the jar
    noteNumber.innerHTML = `Notes in the jar: ${notesLeft} !`;

    //Creating element containing after message Info
    let afterMessage = document.createElement('h2');
    //Styling element containing after message Info
    afterMessage.style = 'color: #001530; text-shadow: 2px 2px 5px #4200008c; font-weight: 400;';

    //Assigning The after message info.
    afterMessage.innerHTML = 'Do you wanna pull one more?';

    //Clear the content box that contained the message
    contentBox.innerHTML = '';

    //Appending the element containing after message info 
    contentBox.appendChild(afterMessage);

    //Making pull button reapear
    pullBtn.style = 'display: block;';

    //Making Back button dissapear
    goBack.style = 'display: none;';
})

//messagesDrawn = messagesDrawn + retArray;


