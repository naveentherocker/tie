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

tie.factory('StdOutSeparatorService', [
  function() {
    /**
     * The separator used in between test cases' stdOut.
     *
     * @type {string}
     **/
    var separator = "";

    return {
      /**
      * Setter method for the separator.
      *
      * @param {string} generated Separator generated during preprocessing.
      */
      setSeparator: function(generated) {
        separator = generated;
      },

      /**
      * Getter method for the separator.
      *
      * @returns {string}
      */
      getSeparator: function() {
        return separator;
      }
    };
  }
]);
