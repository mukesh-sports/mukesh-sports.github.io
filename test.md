 - StateFull And stateless widgets
 
 - App state  
>> App State may also be referred to as a shared state or application state. It is possible to share app states across sections of your app and maintain user sessions in the same way. 

- runApp() vs main()
>> main(): This function starts the program. Flutter does not allow us to write any program without the main() function.  
>> runApp(): Using runApp(), you are able to return the widgets that are connected to the screen as a root of the widget tree that will be rendered on the screen. This function is called in the main function, which is the driver of the app.

- Plugins vs Packages
>> Plugins: Using native code, enables more usability and makes it easier to use the device.  
>> Packages:  These are new code or components written in the dart programming language. Packages and plugins are often referred to as packages on DartPub, and specific distinctions between the two are made only during the creation of a new package.   



- keys in flutter & when to use them ?
>>The primary use of keys is to modify a widget tree that contains stateful widgets, not to modify a tree that is totally composed of stateless widge


- Flutter Inspector
    Select widget mode 
    Toggle platform 
    Show paint baselines 
    Show debug paint 
    Refresh widget 
    Enable slow animations 
    Show/hide performance overlay 



- Ticker in Flutter
>> We use a ticker to tell how often our animation is refreshed in Flutter. Signals are sent at a constant frequency, such as 60 times per second, using this type of signal-sending class. We understand it better with our watch, which ticks constantly. For each tick, a callback method is provided that has the time since the first tick at each second since it was started. The tickers are synchronized immediately, even if they begin at different times. 

- Streams 

The streams’ functionality is part of Dart and is inherited by Flutter. In Flutter, there are two kinds of streams: 

 -- Single Subscription Streams: These streams deliver events sequentially. They are considered as sequences contained within a larger whole. These streams are used when the order in which events are received matters, such as reading a file. There can be only one listener throughout the sequence, and without a listener, the event won't be triggered. 
    ** stream ->> widget

 -- Broadcast Streams: These streams deliver events to their subscribers. Upon subscribing to events, subscribers are immediately able to start listening to them.  These are versatile streams that allow several listeners to listen simultaneously. Furthermore, one can listen again even after canceling a previous subscription.

                            - widget
    ** Broadcast Streams -  - widget
                            - widget
    


- Explain BuildContext.
 -- BuildContexts are used to identify or locate widgets in widget trees. Each widget has its own BuildContext, i.e., one BuildContext per widget. Basically, we're using it to find references to other widgets and themes. In addition, you can utilize it to interact with widget parents and access widget data. 


- Stateful Widget Lifecycle
A stateful widget has the following lifecycle stages:

1) createState()

2) mounted == true

3) initState()

4) didChangeDependencies()

5) build()

6) didUpdateWidget()

7) setState()

8) deactivate()

9) dispose()

10) mounted == false


- ScopedModel and BLoC (Business Logic Components) 
Flutter app architecure patterns
