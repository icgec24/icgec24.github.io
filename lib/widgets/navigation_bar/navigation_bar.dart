import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class NavigationBarWidget extends StatelessWidget {
  final Function(String) onTap;
  const NavigationBarWidget({required this.onTap,super.key});

  @override
  Widget build(BuildContext context) {
    List<String> nav_title = ['News','Galleries','Organizing Committee','Keynote Speech','Call for Paper','Important Dates','Invited Sessions','Paper Submission',
    'Accepted Paper','Final Manuscript','Conference Registration','Conference Program','Conference Venue','Recommended Accommodation','Miyazaki Prefecture'];
    final scrollController = ScrollController();
    return Container(
      color: Colors.blueGrey,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children:[
          Container( color:Colors.black54,
              padding: EdgeInsets.all(15),
              child: _NavBarItem(title:'ICGEC-2024',textStyle: const TextStyle(fontSize: 20,color:Colors.white,fontWeight: FontWeight.bold),onTap: onTap,)),
          Expanded(
            child: Scrollbar(
              controller: scrollController,
              scrollbarOrientation: ScrollbarOrientation.right,
              thumbVisibility: true,
              trackVisibility: true,
              child: ListView(
                controller:scrollController,
                children: nav_title.map((e) =>Container(
                    padding: EdgeInsets.all(8),
                    child: _NavBarItem(title: e,textStyle: GoogleFonts.ptSans(color: Colors.white70,fontSize: 17),onTap: onTap))).toList(),
              ),
            ),
          ),
          Container( color:Colors.black54,
              padding: EdgeInsets.all(12),
              child: _NavBarItem(title:'Contact us',textStyle: const TextStyle(fontSize: 18,color:Colors.grey,fontWeight: FontWeight.bold),onTap: onTap)),
        ]
      ),
    );
  }
}

class _NavBarItem extends StatelessWidget {
  final String title;
  final TextStyle textStyle;
  final Function(String) onTap;
  const _NavBarItem({required this.title,required this.textStyle,required this.onTap});

  @override
  Widget build(BuildContext context) {
    return InkWell(
         onTap:(){
           onTap(title);
         },
        child: Center(child: Text(title,style: textStyle,)));
  }
}


