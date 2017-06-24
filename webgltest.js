var supwebgl =
{
	
    supportV1: function()
    {
		if (window.WebGLRenderingContext !== typeof undefined)
		{
			console.log("supportV1");
			return true;
		}
		else
		{
			console.log("Not supportV1");
			return false;
		}
    },
    supportV2: function()
    {
		if (window.WebGL2RenderingContext !== typeof undefined)
		{
			console.log("supportV2");
			return true;
		}
		else
		{
			console.log("Not supportV2");
			return false;			
		}
    },
    IsWebglV1Enable: function()
    {
		canvas = document.createElement('canvas');	
		ret = true;
		if (!supwebgl.supportV1())
		{
			ret = false;
		}
		else
		{
			try {		
				gl = null;	  
				  // Try to grab the standard context. If it fails, fallback to experimental.
				gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');	  	  
				  // Only continue if WebGL is available and working
				if (!gl)
				{
					ret = false;
				}				
			}
			catch(er)
			{
				ret = false;		
			}
		}
		
		canvas.remove();
		
		if (ret === true)
		{
			console.log("WebglV1 Enable");
		}
		else
		{
			console.log("WebglV1 Not Enable");
		}
		
		return ret;
    },
	
    IsWebglV2Enable: function()
    {
		canvas = document.createElement('canvas');
		ret = true;
		if (!supwebgl.supportV2())
		{
			ret = false;
		}
		else
		{
			try {		
				gl = null;	  
				  // Try to grab the standard context. If it fails, fallback to experimental.
				gl = canvas.getContext('webgl2') || canvas.getContext('experimental-webgl2');	  	  
				  // Only continue if WebGL is available and working
				if (!gl)
				{
					ret = false;
				}
				
			}
			catch(er)
			{
				ret = false;				
			}
		}
		
		canvas.remove();
		
		if (ret === true)
		{
			console.log("WebglV2 Enable");
		}
		else
		{
			console.log("WebglV2 Not Enable");
		}
		return ret;
    }
}