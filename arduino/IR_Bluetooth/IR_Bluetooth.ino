#include <SoftwareSerial.h>

#define rxPin 10
#define txPin 11
#define IRPin 2 // 使用數位腳位2接收紅外線訊號

SoftwareSerial mySerial =  SoftwareSerial(rxPin, txPin);

void setup()
{
  // define pin modes for tx, rx, led pins:
  pinMode(rxPin, INPUT);
  pinMode(txPin, OUTPUT);
  mySerial.begin(9600);
  Serial.begin(9600);

  pinMode(IRPin, INPUT);
}

void loop()
{
  // listen for new serial coming in:
  //char someChar = mySerial.read();
  // print out the character:
//  Serial.print("123\n");
  delay(1000);
  int IRswitch = digitalRead(IRPin);
  Serial.print(IRswitch);
  Serial.print("\n");
  if (IRswitch == HIGH) {
    mySerial.print("YES\n");
    mySerial.print("YES\n");
    mySerial.print("YES\n");
  }
  
//    Serial.print("Detected\n");
//    delay(1000);
//    mySerial.print("YES\n");
//    mySerial.print("YES\n");
//    mySerial.print("YES\n");
}
