import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:google_fonts/google_fonts.dart';

class NavigationBarWidget extends StatelessWidget {
  final Function(String) onTap;
  const NavigationBarWidget({required this.onTap,super.key});

  @override
  Widget build(BuildContext context) {
    List<String> nav_title = ['News','Galleries','Organizing Committee','Keynote Speech','Call for Paper','Important Dates','Invited Sessions','Paper Submission',
    'Accepted Paper','Final Manuscript','Conference Registration','Conference Program','Conference Venue','Recommended Accommodation',"Visa Application",'Access to Miyazaki','Miyazaki Information'];
    final scrollController = ScrollController();
    var selectTab = "".obs;
    return Container(
      color: Colors.blueGrey,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children:[
          Container( color:Colors.black54,
              padding: const EdgeInsets.all(15),
              child: NavBarItem(title:'ICGEC-2024',textStyle: const TextStyle(fontSize: 20,color:Colors.white,fontWeight: FontWeight.bold),onTap:  (String value){
                onTap(value);
                selectTab.value = value;
              },)),
          Expanded(
            child: Scrollbar(
              controller: scrollController,
              scrollbarOrientation: ScrollbarOrientation.right,
              thumbVisibility: true,
              trackVisibility: true,
              child: Obx(
                ()=> ListView(
                  controller:scrollController,
                  children: nav_title.map((e) =>Container(
                      padding: const EdgeInsets.all(8),
                      child: NavBarItem(title: e,showBadge: e=="News",textStyle: GoogleFonts.ptSans(color: selectTab.value == e? Colors.white: Colors.white70,fontSize: 17),onTap: (String value){
                      onTap(value);
                      selectTab.value = value;
                      }))).toList(),
                ),
              ),
            ),
          ),
          Container( color:Colors.black54,
              padding: const EdgeInsets.all(12),
              child: NavBarItem(title:'Contact us',textStyle: const TextStyle(fontSize: 18,color:Colors.grey,fontWeight: FontWeight.bold),onTap:  (String value){
                onTap(value);
                selectTab.value = value;
              })),
        ]
      ),
    );
  }
}

class NavBarItem extends StatelessWidget {
  final String title;
  final TextStyle textStyle;
  final bool showBadge;
  final Function(String) onTap;
  const NavBarItem({super.key, required this.title,required this.textStyle,required this.onTap,this.showBadge=false});

  @override
  Widget build(BuildContext context) {
    return InkWell(
         onTap:(){
           onTap(title);
         },
        child: Center(child: Badge(
            isLabelVisible: showBadge,child: Padding(
              padding: const EdgeInsets.only(top: 4.0,right: 8.0),
              child: Text(title,style: textStyle,),
            ))));
  }
}


