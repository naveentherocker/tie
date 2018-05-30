// Copyright 2017 The TIE Authors. All Rights Reserved.
 //
 // Licensed under the Apache License, Version 2.0 (the "License");
 // you may not use this file except in compliance with the License.
 // You may obtain a copy of the License at
 //
 //      http://www.apache.org/licenses/LICENSE-2.0
 //
 // Unless required by applicable law or agreed to in writing, software
 // distributed under the License is distributed on an "AS-IS" BASIS,
 // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 // See the License for the specific language governing permissions and
 // limitations under the License.

 /**
  * @fileoverview Service for displaying printed output.
  */

tie.factory('DisplayStdOutService', [
  function() {
    /**
     * The output to be displayed.
     *
     * @type {string}
     **/
    var output = "";

    return {
      /**
      * Setter method for the printed output.
      *
      * @param {string} stdOut User-generated stdOut string.
      */
      displayOutput: function(stdOut) {
        output = stdOut;
      },

      /**
      * Getter method for the printed output.
      *
      * @returns {string}
      */
      getOutput: function() {
        return output;
      }
    };
  }
]);
