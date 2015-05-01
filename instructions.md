# Instructions

---

#### Requirements

* jQuery
* Link to thumbnail in an XML record

#### From the Back Office:

1. Create a normalization rule that will pull in thumbnails from XML and display in brief results.
	* Go to **Advanced Configuration** > **Full Normalization Rule Configuration**
	* Choose the Normalization Rule set. (i.e. UTK_OAI)
	* Choose the **Links** section and **Thumbnail** field.
	* Create a new rule that looks at the XML path that stores the thumbnail and copies it with **$$U** as a prefix.
		* ![NormalizationRule](http://dlwork.lib.utk.edu/mark/images/ThumbnailNormalizationRule.png "Thumbnail Normalization Rule")
2. Create a normalization rule that will pull the thumbnail from an XML element and display it as a preview image in the links section of the Full display.
	* Choose the Normalization Rule set. (i.e. UTK_OAI)
	* Choose the **Links** section and **Link to Resource** field.
	* Create a new rule that looks at the XML path that stores the thumbnail and copies it with **$$U** as a prefix and **$$DView Thumbnail** at the end of the string.
		* ![NormalizationRule](http://dlwork.lib.utk.edu/mark/images/PreviewNormalizationRule.png "Preview Normalization Rule")
		
#### Add JavaScript

* Upload thumbnails.js to a web accessible server.
* From your header.html page in Primo, add a line that links to our JavaScript.
	* `<script src="../javascript/thumbnails.js" type="text/javascript"></script>`
	 
	 