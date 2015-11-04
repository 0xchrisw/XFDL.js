'use strict';
/*
 * File Info
 *  - http://www.w3.org/TR/1999/WD-xml-c14n-19991109.html
 *  - 'application/vnd.xfdl;content-encoding="base64-gzip"'
 *
 * Other Libs
 *  - jsZip
 *  - FileSaver
 *
 * DD1750 Info
 *   - items: [ 'nsn', 'serial', 'ui',
 *              'price', 'auth', 'onhand' ]
 *
 */

var jsXFDL = function( file ) {
  /**
   * @file - STRING - Decoded XFDL file
   */
  var file        =  // file || null
  this.file       =  // file || null
  this.original   = file || null;  // new String( )
  this.serializer = new XMLSerializer( );
  this.parser = new DOMParser( );
  if( file ) {
    this.file = this.open( );  // this.open( file )
  }
};

jsXFDL.prototype.encode = function( file ) {
  /**
   * If we don't replace these characters before
   * Parsing/Serializing we will run into issues
   * later...
   */
  return file.replace( /&#xD;/g, '␍' )  // Carriage Return
             .replace( /&#xA;/g, '␊' ); // New Line
};

jsXFDL.prototype.decode = function( file ) {
  /**
   * Remember those characters, yeah those up there,
   * better change them back before we save/close the
   * document...
   */
  return file.replace( /␍/g, '&#xD;\r' )  // Carriage Return
             .replace( /␊/g, '&#xA;\n' ); // New Line
};

jsXFDL.prototype.open = function( file ) {
  var file   = this.encode( file || this.file ),
      parser = this.parser || new DOMParser( );
  return this.file = parser.parseFromString( file, 'text/xml' );
};

jsXFDL.prototype.close = function( ) {
  var file       = file || this.file,
      serializer = this.serializer || new XMLSerializer( );
  this.file = serializer.serializeToString( this.decode( file ) );
  return this.file;
};

jsXFDL.prototype.save = function( ) {
  /**
   * TODO - null out open/edit functions... maybe?
   */
};

jsXFDL.prototype.edit = function( ) {
/*
file.getElementsByTagName( 'field' )
X.prototype.edit = function( query, value ) {
  var file  = this.file,
      query = 'field[sid=' + query + ']>value',
      field = file.querySelectorAll( query )[0];
  filed.textContent = value;
  return;
};
*/
};
