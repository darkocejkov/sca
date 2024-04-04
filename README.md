# Development Process

To start the development process:
1. `npm run tw`
> this will run the Tailwind server in watch mode to compile your tailwind output file (output.css)

2. Create whatever HTML files are necessary within `src/` directory

3. When you are ready to deliver, run `npm run builder -- --path "<PATH_TO_HTML>" --css "styles/output.css"`
> This will build your final product by combining output.css and the specified HTML into a new _public directory.

# Pardot Templating
In order to use Pardot/Salesforce landing pages effectively, you should know about the templating language it uses
[Layout Template](https://help.salesforce.com/s/articleView?id=sf.pardot_layout_template_create.htm&type=5)
