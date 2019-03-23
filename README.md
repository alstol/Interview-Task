- [1. Interview Task](#1-interview-task)  
  - [1.1. Requirements](#11-requirements)  
  - [1.2. Planning](#12-planning)    
    - [1.2.1. UX](#121-ux)      
      - [1.2.1.1. CV](#1211-cv)        
        - [1.2.1.1.1. Target audience](#12111-target-audience)        
        - [1.2.1.1.2. Layout](#12112-layout)        
        - [1.2.1.1.3. Theme](#12113-theme)        
        - [1.2.1.1.4. Feedback](#12114-feedback)      
      - [1.2.1.2. API consumer](#1212-api-consumer)        
        - [1.2.1.2.1. Target audience](#12121-target-audience)        
        - [1.2.1.2.2. Layout](#12122-layout)    
    - [1.2.2. Technologies used](#122-technologies-used)  
  - [1.3. Hosting](#13-hosting)

# 1. Interview Task

This project represents my solution for the task I was given when I applied at LEGO Systems A/S.
## 1.1. Requirements
Not a precise quotation of the requirements, just how I vaguely remember them:
* Make a Web Application with two pages
  * First page should be your CV
  * Second page you should consume a REST service, you can also make your own service, but it's not required.
* Page must be available online (hosted)
* Try not to spend more than 5h on it (not sure 100% about this one)
## 1.2. Planning
### 1.2.1. UX
The first thing I started with was UX. At that point (and now, I guess), as a frontend engineer, UX represented a really big part of my job. 
#### 1.2.1.1. CV
##### 1.2.1.1.1. Target audience
This was probably the first step I did for the project. I tried to decide who am I making this for. Is it children? Nope. Adults? Maybe. This should theoretically be a CV, so I'm probably making it for recruiters, senior developers, manager; people that read a lot of CVs. 

##### 1.2.1.1.2. Layout
Having a target audience set, I had to decide on a layout. I wanted the web page to be clean, easy to read. Back then, when you'd mention a CV I'd think of the basic 2-column style, where you have a picture of your face, name, contact and some relevant information on the left, and some experience (including studies), an intro and some 'eye candy' on the right side. Done deal, I have a layout!

##### 1.2.1.1.3. Theme
Since I agreed that this page will be read by "people that read a lot of CVs", I had to make an appealing theme. I went for a simple black-white-gray (I guess we can call it grayscale) theme, BUT, I used the colour green to highlight the most important things: technical skills. With my experience, recruiters won't spend a lot of time reading your CV and will just skim it to find what they care about, so I just made it easier for them to find it. I went for green as I believe it's a calming colour, and it just pops out.

##### 1.2.1.1.4. Feedback
I couldn't give this away without having some kind of feedback, right? I showed this project (in an early stage) to the most honest person I know: _my father_. The first iteration he saw was literally full screen, immediately after he saw it he asked me what it should be and then I got silence... Yoinks, he didn't like it. I asked him what he would change or what he thinks of it, and his reaction was that he doesn't know where to look, everything was spread everywhere and he was lost. He also suggested that we _tighten_ everything around, like in a container. So I did that! But then, I wasn't that happy with the end result, so I tried to make the container look more like a physical piece of paper, therefore I added a border to it. My father was happy with the end result, but something still triggered me. I replaced the border with a box shadow and woah, it actually looks nice now!

#### 1.2.1.2. API consumer
This part won't contain that much fluff as most important decisions have been already made.

##### 1.2.1.2.1. Target audience
This one should be way different from the previous page, I didn't want to make this for a recruiter. I originally intended this page to be used internaly, something like an employee lookup system. 

##### 1.2.1.2.2. Layout
Being an internal tool I didn't put much effort into picking a layout. I wanted the "employee results" to be displayed as pieces of paper, so I managed to find a texture online and use it.
### 1.2.2. Technologies used

* ASP.NET Core (Web API)
* C#
* Angular JS
* HTML, CSS, JavaScript
* Twitter Bootstrap

## 1.3. Hosting
Page available here: https://legointerviewaso.azurewebsites.net/
