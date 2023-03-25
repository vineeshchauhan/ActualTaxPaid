// method for updating Div
function handleMenuButton(targetDiv, sourceDiv) {
    document.getElementById(targetDiv).innerHTML = document.getElementById(sourceDiv).innerHTML;
  }
  // method for updating Div
  $(function () {
    // Salary and Tax top Table Handling
    $(document).ready(function () {
      var $salaryTaxTable = $('#salaryTaxTable');
      $salaryTaxTable.bootstrapTable({
        data: salaryAndTaxTotal
      });
      // April Total 
      var $salaryTaxTable = $('#aprilSalaryTaxTable');
      $salaryTaxTable.bootstrapTable({
        data: salaryAndTaxTotalApril
      });
      // April Tax and Salary
      var $taxdataAprilTable = $('#taxdataAprilTable');
      $taxdataAprilTable.bootstrapTable({
        data: purchaseAndTaxApril
      });
      $taxdataAprilTable.bootstrapTable('togglePagination');
    });
    // May Total
    var $salaryTaxTable = $('#maySalaryTaxTable');
    $salaryTaxTable.bootstrapTable({
      data: salaryAndTaxTotalMay
    });
    // May Table Handling
    var $taxdataMayTable = $('#taxdataMayTable');
    $taxdataMayTable.bootstrapTable({
      data: purchaseAndTaxMay
    });
    $taxdataMayTable.bootstrapTable('togglePagination');

    // June Total
    var $salaryTaxTable = $('#junSalaryTaxTable');
    $salaryTaxTable.bootstrapTable({
      data: salaryAndTaxTotalJun
    });
    // Jun Table Handling
    var $taxdataMayTable = $('#taxdataJunTable');
    $taxdataMayTable.bootstrapTable({
      data: purchaseAndTaxJun
    });
    $taxdataMayTable.bootstrapTable('togglePagination');

    // July Total
    var $salaryTaxTable = $('#julSalaryTaxTable');
    $salaryTaxTable.bootstrapTable({
      data: salaryAndTaxTotalJul
    });
    // July Table Handling
    var $taxdataMayTable = $('#taxdataJulTable');
    $taxdataMayTable.bootstrapTable({
      data: purchaseAndTaxJul
    });
    $taxdataMayTable.bootstrapTable('togglePagination');

    // Aug Total
    var $salaryTaxTable = $('#augSalaryTaxTable');
    $salaryTaxTable.bootstrapTable({
      data: salaryAndTaxTotalAug
    });
    // Aug Table Handling
    var $taxdataMayTable = $('#taxdataAugTable');
    $taxdataMayTable.bootstrapTable({
      data: purchaseAndTaxAug
    });
    $taxdataMayTable.bootstrapTable('togglePagination');

    // Sep Total
    var $salaryTaxTable = $('#sepSalaryTaxTable');
    $salaryTaxTable.bootstrapTable({
      data: salaryAndTaxTotalSep
    });
    // Sep Table Handling
    var $taxdataMayTable = $('#taxdataSepTable');
    $taxdataMayTable.bootstrapTable({
      data: purchaseAndTaxSep
    });
    $taxdataMayTable.bootstrapTable('togglePagination');

    // Oct Total
    var $salaryTaxTable = $('#octSalaryTaxTable');
    $salaryTaxTable.bootstrapTable({
      data: salaryAndTaxTotalOct
    });
    // Oct Table Handling
    var $taxdataMayTable = $('#taxdataOctTable');
    $taxdataMayTable.bootstrapTable({
      data: purchaseAndTaxOct
    });
    $taxdataMayTable.bootstrapTable('togglePagination');

    // Nov Total
    var $salaryTaxTable = $('#novSalaryTaxTable');
    $salaryTaxTable.bootstrapTable({
      data: salaryAndTaxTotalNov
    });
    // Nov Table Handling
    var $taxdataMayTable = $('#taxdataNovTable');
    $taxdataMayTable.bootstrapTable({
      data: purchaseAndTaxNov
    });
    $taxdataMayTable.bootstrapTable('togglePagination');

    // Dec Total
    var $salaryTaxTable = $('#decSalaryTaxTable');
    $salaryTaxTable.bootstrapTable({
      data: salaryAndTaxTotalDec
    });
    // Dec Table Handling
    var $taxdataMayTable = $('#taxdataDecTable');
    $taxdataMayTable.bootstrapTable({
      data: purchaseAndTaxDec
    });
    $taxdataMayTable.bootstrapTable('togglePagination');

    // Jan Total
    var $salaryTaxTable = $('#janSalaryTaxTable');
    $salaryTaxTable.bootstrapTable({
      data: salaryAndTaxTotalJan
    });
    // Jan Table Handling
    var $taxdataMayTable = $('#taxdataJanTable');
    $taxdataMayTable.bootstrapTable({
      data: purchaseAndTaxJan
    });
    $taxdataMayTable.bootstrapTable('togglePagination');

    // Feb Total
    var $salaryTaxTable = $('#febSalaryTaxTable');
    $salaryTaxTable.bootstrapTable({
      data: salaryAndTaxTotalFeb
    });
    // Feb Table Handling
    var $taxdataMayTable = $('#taxdataFebTable');
    $taxdataMayTable.bootstrapTable({
      data: purchaseAndTaxFeb
    });
    $taxdataMayTable.bootstrapTable('togglePagination');

    // Mar Total
    var $salaryTaxTable = $('#marSalaryTaxTable');
    $salaryTaxTable.bootstrapTable({
      data: salaryAndTaxTotalMar
    });
    // Mar Table Handling
    var $taxdataMayTable = $('#taxdataMarTable');
    $taxdataMayTable.bootstrapTable({
      data: purchaseAndTaxMar
    });
    $taxdataMayTable.bootstrapTable('togglePagination');

    //Previous year Table Handling
    var $previousYearDataTable = $('#previousYearDataTable');
    $previousYearDataTable.bootstrapTable({
      data: previousYearData
    });

  });