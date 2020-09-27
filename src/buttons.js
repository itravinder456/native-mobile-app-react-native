 nextButtonQuick() {
    if(this.state.index < 13) {
     this.setState({
       index: this.state.index+1,
       enable_next: true,
       enable_back:true
     });
   }
   if(this.state.index == 0) {
     this.setState ({
       enable_next: true,
       enable_back:true
     });
   }
   if(this.state.index == 12) {
     this.setState ({
       enable_next: false,
       enable_back:true,
       enable_submit:true
     });
   }
   
   
 }
 backButtonQuick() {
  if(this.state.index < 15 ) {
   this.setState({
     index: this.state.index-1,
     enable_next: true,
     enable_back:true,
     enable_submit:false
   });
 }
 if(this.state.index == 0) {
   this.setState({
     index: this.state.index,
     enable_next: true,
     enable_back:false,
     enable_submit:false
   });
 }
 if(this.state.index == 1) {
   this.setState({
     index: this.state.index,
     enable_next: true,
     enable_submit:false,
     enable_back:false
   });
 }
 
 
}b