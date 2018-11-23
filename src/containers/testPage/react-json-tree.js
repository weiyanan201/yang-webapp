import React , { Component } from 'react'


import JSONTree from 'react-json-tree'

const data = "{\"returnCode\":0,\"data\":{\"groupName\":\"梦幻国度\",\"tableDetail\":{\"name\":\"phoenix_test1\",\"db\":\"phoenix_apollo\",\"id\":87758,\"columns\":[{\"name\":\"col1\",\"type\":\"VARCHAR\",\"comment\":\"类型1\",\"nullable\":false},{\"name\":\"col2\",\"type\":\"DATE\",\"comment\":\"类型2\",\"nullable\":true},{\"name\":\"aaadfasdf\",\"type\":\"BIGINT\",\"comment\":\"afasdf\",\"nullable\":true}],\"keys\":[{\"name\":\"id\",\"type\":\"TIMESTAMP\",\"nullable\":false}],\"storageType\":\"PHOENIX\",\"physicalType\":\"TABLE\",\"comment\":\"table comment\"},\"modifyPermission\":true},\"totalCount\":0}";

const json = JSON.parse(data);

const theme = {
    scheme: 'monokai',
    author: 'wimer hazenberg (http://www.monokai.nl)',
    base00: '#272822',
    base01: '#383830',
    base02: '#49483e',
    base03: '#75715e',
    base04: '#a59f85',
    base05: '#f8f8f2',
    base06: '#f5f4f1',
    base07: '#f9f8f5',
    base08: '#f92672',
    base09: '#fd971f',
    base0A: '#f4bf75',
    base0B: '#a6e22e',
    base0C: '#a1efe4',
    base0D: '#66d9ef',
    base0E: '#ae81ff',
    base0F: '#cc6633'
};

class TreeTest extends Component{

    render(){

        return (

            <div>
                <JSONTree data={json}
                          theme={theme} invertTheme={false}
                          shouldExpandNode={(keyName, data, level)=>{
                              if (level<2){
                                  return true;
                              }
                              return false;
                          }}
                />
            </div>

        )

    }
}

export default TreeTest
