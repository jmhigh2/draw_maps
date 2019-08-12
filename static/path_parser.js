function SVGPathParser(path) //parses big string into smaller objects
{
    var list = [];
    var object_list = []
    var re = RegExp('[A-Za-z]');

    //console.log(path)
    var chunk = "";

    for(i = 0; i< path.length; i++)
    {
      if (re.test(path[i]))
      {
        list.push(chunk);
        chunk = path[i];
      }
      else
      {
        chunk = chunk + path[i];
          //add to current chunk
      }
    }
    //console.log(list);
    list.shift() //get rid of firt object;

    for(i = 0; i < list.length; i++)
    {
      var temp = list[i].split(' ');
      if (!temp[temp.length - 1])
      {
        temp.pop();
      }
      //console.log(temp);
      object_list.push(temp);
    }

    return object_list
}

function SVGPathNormalizer(path_list) //takes original coordinate and subtracts others
{
  var new_path = path_list;

  original_x = path_list[0][1];
  original_y = path_list[0][2];

  console.log(original_x);
  console.log(original_y);

  for(i = 0; i < path_list.length; i++)
  {
    for(j = 1; j < path_list[i].length; j = j+2)
    {
      new_path[i][j] = path_list[i][j] - original_x;
      new_path[i][j+1] = path_list[i][j+1] - original_y;


    }
  }

  return new_path;
}
