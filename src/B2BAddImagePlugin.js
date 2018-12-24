import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
// import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export class InsertImage extends Plugin {
  init() {
    console.log( 'InsertImage was initialized' );
    const editor = this.editor;
    editor.ui.componentFactory.add( 'insertImage', locale => {
      const view = new ButtonView( locale );

      view.set( {
        label: 'Insert image',
        icon: imageIcon,
        tooltip: true
      } );

      // Callback executed once the image is clicked.
      view.on( 'execute', () => {
        console.log("'InsertImage' plugin B2B family is activated!");

        
      } );

      return view;
    })
  }
}