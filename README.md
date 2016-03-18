root-include
============
Sometimes it is hard to resolve the relative path of a given local module using only require. This module provides an alternation of require api, include, which takes absolute path relative to the directory of initial script. This will make  process of locating local modules easier.  
  
By default, once the module is attached to ( required by ) the process. include api will automatically register as global api that can used through out the entire project. This will make the developing process much easier.
